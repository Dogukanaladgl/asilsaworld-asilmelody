/**
 * ONE-SHOT sync: copy an external Asil World photo folder into
 * public/catalog/2027 as WebP. The site itself never reads this path —
 * day-to-day catalog rebuilds use local assets via `npm run catalog:build`.
 *
 * Source layout (Asil World/):
 *   Koltuk Takımları/N. Name/         → living (folder number = display order)
 *   L Koltuklar & Köşe…/N. name.jpg   → corner
 *   <Name> Koleksiyonu/<…Yatak|Yemek Odası>/ → room collections
 *   Yatak Baza & Başlık Karyola/Name/ or Name.jpg → bedset
 *
 * Inside every product folder the file marked “kapak” is the cover, the rest
 * follow their leading number (“2. görsel”, “3. görsel” …).
 *
 * Writes public/catalog/2027/order.json so catalog:build keeps folder order.
 *
 * Run (path required):
 *   npm run catalog:import -- "C:\path\to\Asil World"
 *   ASIL_CATALOG_SOURCE="C:\path\to\Asil World" npm run catalog:import
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";

const SOURCE_ROOT =
  process.argv[2]?.trim() ||
  process.env.ASIL_CATALOG_SOURCE?.trim() ||
  "";
const OUT_ROOT = path.join(process.cwd(), "public", "catalog", "2027");

const MAX_EDGE = 2800;
const WEBP_QUALITY = 95;
/** Feature collages (e.g. LED / USB callouts) are small graphics, not product shots. */
const MIN_PRODUCT_EDGE = 1000;

/** Products without a “kapak” file — or when a specific shot should lead. */
const COVER_OVERRIDES = {
  // Beige lifestyle room (not the orange carmen2 shot).
  carmen: /carmen\s*\(\s*2\s*\)/i,
};

/** Folder names that need a different display slug. */
const SLUG_ALIASES = {
  luxry: "luxury",
};

/** @typedef {{ categoryId: string, slug: string, sources: string[] }} Product */

function slugify(input) {
  return input
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 56);
}

function isImage(file) {
  return /\.(jpe?g|png|webp|tif{1,2})$/i.test(file);
}

function isJunkImage(file) {
  const name = path.basename(file).toLowerCase();
  return (
    name === "thumbs.db" ||
    /removebg/i.test(name) ||
    /yeni\s*klas/i.test(name)
  );
}

function isReadableImage(file) {
  if (!isImage(file) || isJunkImage(file)) return false;
  try {
    const st = fs.statSync(file);
    if (!st.isFile() || st.size < 1024) return false;
    // Force OneDrive hydrate for cloud-only placeholders.
    const fd = fs.openSync(file, "r");
    const buf = Buffer.alloc(1);
    fs.readSync(fd, buf, 0, 1, 0);
    fs.closeSync(fd);
    return true;
  } catch {
    return false;
  }
}

function leadingNumber(name) {
  const m = name.match(/^(\d+)/);
  return m ? Number(m[1]) : null;
}

function stripLeadingNumber(name) {
  return name.replace(/^\d+\s*\.?\s*/, "").trim();
}

function stem(file) {
  return path.basename(file, path.extname(file));
}

/** Cover (“kapak” or override) first, then by leading number, then by name. */
function orderPhotos(files, productSlug) {
  const override = COVER_OVERRIDES[productSlug];
  const rank = (file) => {
    const name = stem(file);
    if (/kapak/i.test(name)) return -2;
    if (override?.test(name)) return -1;
    return 0;
  };
  return [...files].sort((a, b) => {
    const r = rank(a) - rank(b);
    if (r !== 0) return r;
    const na = leadingNumber(stem(a)) ?? Number.MAX_SAFE_INTEGER;
    const nb = leadingNumber(stem(b)) ?? Number.MAX_SAFE_INTEGER;
    if (na !== nb) return na - nb;
    return stem(a).localeCompare(stem(b), "tr", { numeric: true });
  });
}

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !/yeni\s*klas/i.test(d.name))
    .map((d) => ({ name: d.name, dir: path.join(dir, d.name) }));
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .map((name) => path.join(dir, name))
    .filter((p) => {
      try {
        return fs.statSync(p).isFile() && isReadableImage(p);
      } catch {
        return false;
      }
    });
}

function findRootDir(pattern) {
  return listDirs(SOURCE_ROOT).find((d) => pattern.test(d.name)) ?? null;
}

function byNumberThenName(a, b) {
  const na = leadingNumber(a.name) ?? Number.MAX_SAFE_INTEGER;
  const nb = leadingNumber(b.name) ?? Number.MAX_SAFE_INTEGER;
  if (na !== nb) return na - nb;
  return a.name.localeCompare(b.name, "tr");
}

function productSlug(rawName) {
  const slug = slugify(stripLeadingNumber(rawName));
  return SLUG_ALIASES[slug] ?? slug;
}

/** @returns {{ products: Product[], order: Record<string, string[]> }} */
function collectProducts() {
  /** @type {Product[]} */
  const products = [];
  /** @type {Record<string, string[]>} */
  const order = { living: [], corner: [], bedset: [], collections: [] };

  // --- Living: numbered folders ---
  const living = findRootDir(/^Koltuk/i);
  if (living) {
    for (const folder of listDirs(living.dir).sort(byNumberThenName)) {
      const slug = productSlug(folder.name);
      const sources = orderPhotos(listImages(folder.dir), slug);
      if (!sources.length) continue;
      products.push({ categoryId: "living", slug, sources });
      order.living.push(slug);
    }
  }

  // --- Corner / L sofas: numbered single files ---
  const corner = findRootDir(/^L\s*Koltuk/i);
  if (corner) {
    const files = listImages(corner.dir)
      .map((file) => ({ name: path.basename(file), file }))
      .sort(byNumberThenName);
    for (const { file } of files) {
      const slug = productSlug(stem(file));
      products.push({ categoryId: "corner", slug, sources: [file] });
      order.corner.push(slug);
    }
  }

  // --- Room collections: “<Name> Koleksiyonu/<Name> Yatak|Yemek Odası” ---
  const collectionRoots = [
    ...listDirs(SOURCE_ROOT).filter((d) => /Koleksiyonu$/i.test(d.name)),
    // Legacy layout: everything under “Koleksiyonlar/”.
    ...listDirs(path.join(SOURCE_ROOT, "Koleksiyonlar")),
  ].sort(byNumberThenName);

  for (const coll of collectionRoots) {
    const family = slugify(coll.name.replace(/\s*Koleksiyonu$/i, ""));
    let found = false;
    for (const sub of listDirs(coll.dir)) {
      const isDining = /yemek/i.test(sub.name);
      const isBedroom = /yatak/i.test(sub.name);
      if (!isDining && !isBedroom) continue;
      const categoryId = isDining ? "dining" : "bedroom";
      const slug = `${family}-${isDining ? "yemek-odasi" : "yatak-odasi"}`;
      const sources = orderPhotos(listImages(sub.dir), slug);
      if (!sources.length) continue;
      products.push({ categoryId, slug, sources });
      found = true;
    }
    if (found) order.collections.push(family);
  }

  // --- Bedset: model folders + loose single-photo models ---
  const bedset = findRootDir(/^Yatak/i);
  if (bedset) {
    /** @type {{ name: string, slug: string, files: string[] }[]} */
    const models = [
      ...listDirs(bedset.dir).map((d) => ({
        name: d.name,
        slug: productSlug(d.name),
        files: listImages(d.dir),
      })),
      ...listImages(bedset.dir).map((file) => ({
        name: stem(file),
        slug: productSlug(stem(file)),
        files: [file],
      })),
    ].sort((a, b) => a.slug.localeCompare(b.slug, "tr"));

    for (const model of models) {
      const sources = orderPhotos(model.files, model.slug);
      if (!sources.length) continue;
      products.push({ categoryId: "bedset", slug: model.slug, sources });
      order.bedset.push(model.slug);
    }
  }

  return { products, order };
}

async function isProductShot(src) {
  const { width = 0, height = 0 } = await sharp(src).metadata();
  return Math.max(width, height) >= MIN_PRODUCT_EDGE;
}

async function convertImage(src, dest) {
  await sharp(src)
    .rotate()
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(dest);
}

async function main() {
  if (!SOURCE_ROOT) {
    throw new Error(
      [
        "No external source path given.",
        "The site uses public/catalog/2027 — rebuild with: npm run catalog:build",
        "To sync new photos from an external folder once:",
        '  npm run catalog:import -- "C:\\path\\to\\Asil World"',
      ].join("\n"),
    );
  }

  console.log("Source:", SOURCE_ROOT);
  console.log("Out:", OUT_ROOT);

  if (!fs.existsSync(SOURCE_ROOT)) {
    throw new Error(`Source folder not found: ${SOURCE_ROOT}`);
  }

  const { products, order } = collectProducts();
  console.log(`Found ${products.length} products`);

  // Convert into a staging dir, then swap — avoids wiping the live catalog on failure.
  const staging = `${OUT_ROOT}.staging`;
  if (fs.existsSync(staging)) {
    fs.rmSync(staging, { recursive: true, force: true });
  }
  fs.mkdirSync(staging, { recursive: true });

  let converted = 0;
  for (const product of products) {
    const sources = [];
    for (const src of product.sources) {
      if (await isProductShot(src)) sources.push(src);
      else console.log(`    skip graphic: ${path.basename(src)}`);
    }
    if (!sources.length) continue;

    const catDir = path.join(staging, product.categoryId);
    fs.mkdirSync(catDir, { recursive: true });

    for (const [i, src] of sources.entries()) {
      const suffix =
        sources.length > 1 ? `-${String(i + 1).padStart(2, "0")}` : "";
      await convertImage(src, path.join(catDir, `${product.slug}${suffix}.webp`));
      converted++;
    }

    console.log(
      `  [${product.categoryId}] ${product.slug} (${sources.length} foto) ← ${sources
        .map((s) => path.basename(s))
        .join(", ")}`,
    );
  }

  if (converted === 0) {
    fs.rmSync(staging, { recursive: true, force: true });
    throw new Error("No images converted — live catalog left unchanged.");
  }

  fs.writeFileSync(
    path.join(staging, "order.json"),
    `${JSON.stringify(order, null, 2)}\n`,
    "utf8",
  );

  if (fs.existsSync(OUT_ROOT)) {
    fs.rmSync(OUT_ROOT, { recursive: true, force: true });
  }
  fs.renameSync(staging, OUT_ROOT);

  console.log(`Converted ${converted} images → ${OUT_ROOT}`);
  console.log("Building catalog from local assets…");

  const build = spawnSync(
    process.execPath,
    [path.join(process.cwd(), "scripts", "curate-catalog.mjs")],
    { stdio: "inherit" },
  );
  if (build.status !== 0) {
    process.exit(build.status ?? 1);
  }

  console.log(
    "Done. Future updates: edit public/catalog/2027 then npm run catalog:build",
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

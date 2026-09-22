/**
 * Build lib/catalog.generated.ts + covers from assets already in
 * public/catalog/2027. Does NOT read the desktop / OneDrive folder.
 *
 * Product order comes from public/catalog/2027/order.json (written by
 * catalog:import from the source folder numbering). Photo order inside a
 * product follows the -01, -02 … suffixes; -01 is the cover.
 *
 * Room collections (e.g. Alaçatı) become their own category with two
 * products: “<Name> Yatak Odası” and “<Name> Yemek Odası”.
 *
 * Run: npm run catalog:build
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const CAT = path.join(ROOT, "public", "catalog", "2027");
const OUT = path.join(ROOT, "lib", "catalog.generated.ts");
const COVERS = path.join(CAT, "covers");
const ORDER_FILE = path.join(CAT, "order.json");

/** Visual rhythm for bedsets: light → warm → dark → accent (facing mixed). */
const BEDSET_ORDER = [
  "avonnis",
  "hayal",
  "venus",
  "efsane",
  "carmen",
  "ruzgar",
  "rahat",
  "luxury",
  "bella",
  "meram",
  "tesla",
  "nirvana",
];

/** Pretty titles for slugs that need Turkish characters / casing. */
const DISPLAY_NAMES = {
  imperial: "İmperial",
  incanto: "İncanto",
  venus: "Venüs",
  ruzgar: "Rüzgar",
};

/** Collection family → base name used in section titles. */
const FAMILY_NAMES = {
  alacati: "Alaçatı",
  "alisya-gold": "Alisya Gold",
  alyans: "Alyans",
  tokyo: "Tokyo",
};

const ROOMS = [
  { dir: "bedroom", suffix: "yatak-odasi", label: "Yatak Odası" },
  { dir: "dining", suffix: "yemek-odasi", label: "Yemek Odası" },
];

const PRODUCT_DIRS = ["living", "corner", "bedset"];

function titleFromKey(key) {
  if (DISPLAY_NAMES[key]) return DISPLAY_NAMES[key];
  return key
    .split("-")
    .map((w) => w.charAt(0).toLocaleUpperCase("tr-TR") + w.slice(1))
    .join(" ");
}

function familyName(family) {
  return FAMILY_NAMES[family] ?? titleFromKey(family);
}

function readOrder() {
  if (!fs.existsSync(ORDER_FILE)) return {};
  return JSON.parse(fs.readFileSync(ORDER_FILE, "utf8"));
}

function listWebp(subdir) {
  const dir = path.join(CAT, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".webp") && !f.includes(".tmp"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/catalog/2027/${subdir}/${f}`);
}

/** Group `name.webp` / `name-01.webp` into one product. */
function groupByProduct(urls) {
  /** @type {Map<string, string[]>} */
  const map = new Map();
  for (const url of urls) {
    const key = path.basename(url, ".webp").replace(/-\d+$/, "");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(url);
  }
  return map;
}

function sortKeys(keys, preferredOrder = []) {
  const rank = new Map(preferredOrder.map((k, i) => [k, i]));
  return [...keys].sort((a, b) => {
    const ra = rank.has(a) ? rank.get(a) : 1000;
    const rb = rank.has(b) ? rank.get(b) : 1000;
    if (ra !== rb) return ra - rb;
    return a.localeCompare(b, "tr");
  });
}

let counter = 1;
function nextId() {
  return `AW-2027-${String(counter++).padStart(3, "0")}`;
}

async function writeCover(id, publicUrl) {
  if (!publicUrl) {
    console.warn("No cover for", id);
    return;
  }
  const src = path.join(ROOT, "public", publicUrl.replace(/^\//, ""));
  if (!fs.existsSync(src)) {
    console.warn("Missing cover file", publicUrl);
    return;
  }
  fs.mkdirSync(COVERS, { recursive: true });
  await sharp(src)
    .rotate()
    .resize({ width: 1600, height: 2000, fit: "cover", position: "centre" })
    .webp({ quality: 95, effort: 5 })
    .toFile(path.join(COVERS, `${id}.webp`));
  console.log("cover", id);
}

/** One product per room, each with its own gallery. */
function buildCollections(order) {
  /** @type {Map<string, Record<string, string[]>>} */
  const families = new Map();

  for (const room of ROOMS) {
    for (const [key, urls] of groupByProduct(listWebp(room.dir))) {
      const family = key.replace(new RegExp(`-${room.suffix}$`), "");
      if (!families.has(family)) families.set(family, {});
      families.get(family)[room.dir] = urls;
    }
  }

  /** @type {any[]} */
  const items = [];
  /** @type {Record<string, string>} */
  const covers = {};

  for (const family of sortKeys([...families.keys()], order.collections)) {
    const galleries = families.get(family);
    for (const room of ROOMS) {
      const imageUrls = galleries[room.dir];
      if (!imageUrls?.length) continue;
      const title = `${familyName(family)} ${room.label}`;
      covers[family] ??= imageUrls[0];
      items.push({
        id: nextId(),
        title,
        categoryId: family,
        collection: title,
        imageUrl: imageUrls[0],
        imageUrls,
      });
      console.log(`  [${family}] ${title} (${imageUrls.length} foto)`);
    }
  }

  return { items, covers, families: [...families.keys()] };
}

async function main() {
  if (!fs.existsSync(CAT)) {
    throw new Error(
      `Local catalog missing: ${CAT}\nRun once with an external source: npm run catalog:import -- "C:\\path\\to\\Asil World"`,
    );
  }

  const order = readOrder();

  /** @type {any[]} */
  const items = [];
  /** @type {Record<string, string>} */
  const covers = {};

  for (const categoryId of PRODUCT_DIRS) {
    const grouped = groupByProduct(listWebp(categoryId));
    const orderForCat =
      categoryId === "bedset" ? BEDSET_ORDER : order[categoryId];
    for (const key of sortKeys([...grouped.keys()], orderForCat)) {
      const imageUrls = grouped.get(key);
      if (!imageUrls?.length) continue;
      const title = titleFromKey(key);
      items.push({
        id: nextId(),
        title,
        categoryId,
        collection: title,
        imageUrl: imageUrls[0],
        imageUrls,
      });
      covers[categoryId] ??= imageUrls[0];
      console.log(`  [${categoryId}] ${title} (${imageUrls.length} foto)`);
    }
  }

  const collections = buildCollections(order);
  items.push(...collections.items);
  Object.assign(covers, collections.covers);
  // “Diğerleri” has no photos of its own yet.
  covers.others = covers.living;

  const categoryIds = [...PRODUCT_DIRS, ...collections.families, "others"];
  const body = JSON.stringify(items, null, 2);
  const file = `/* Auto-generated by scripts/curate-catalog.mjs — do not edit by hand */
export type CatalogCategoryId =
${categoryIds.map((id) => `  | ${JSON.stringify(id)}`).join("\n")};

export type CatalogItem = {
  id: string;
  title: string;
  categoryId: CatalogCategoryId;
  collection: string | null;
  imageUrl: string;
  imageUrls: string[];
};

export const catalogYear = 2027;

export const catalogItems: CatalogItem[] = ${body};
`;
  fs.writeFileSync(OUT, file, "utf8");
  console.log(`Wrote ${items.length} items → ${OUT}`);

  fs.rmSync(COVERS, { recursive: true, force: true });
  for (const [id, url] of Object.entries(covers)) {
    await writeCover(id, url);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

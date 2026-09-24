/**
 * Build lib/catalog.generated.ts + covers from assets already in
 * public/catalog/2027. Does NOT read the desktop / OneDrive folder.
 *
 * Product order comes from public/catalog/2027/order.json (written by
 * catalog:import from the source folder numbering). Photo order inside a
 * product follows the -01, -02 … suffixes; -01 is the cover.
 *
 * Named suites (Alaçatı, Alisya Gold, …) land under Yatak Odası / Yemek
 * Odası as products — not as their own home-grid categories.
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
  "nirvana",
  "luxury",
  "bella",
  "efsane",
  "carmen",
  "ruzgar",
  "rahat",
  "meram",
  "venus",
  "tesla",
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

/** Home-grid covers only — product galleries keep their own order. */
const HOME_COVER_OVERRIDES = {
  bedroom: "/catalog/2027/bedroom/alacati-yatak-odasi-02.webp",
  dining: "/catalog/2027/dining/alacati-yemek-odasi-01.webp",
  others: "/catalog/2027/others/bahce-seti-hires.webp",
};

/** Crop bias for home covers: 0 = left, 0.5 = centre, 1 = right. */
const HOME_COVER_BIAS = {};

/** Extra horizontal nudge in final cover pixels (positive = right, negative = left). */
const HOME_COVER_NUDGE_PX = {};

/**
 * When set, crop stays 4:5 / same output size, but the window is centred on
 * the bed + nightstand. `x` = focus centre (0–1 of source width),
 * `span` = how much of the source width to keep (smaller = tighter on furniture).
 * Still respects HOME_COVER_NUDGE_PX.
 */
const HOME_COVER_FOCUS = {};

/**
 * Fit full scene into the 4:5 card (bed + nightstands stay visible and
 * centred). Uses a blurred fill behind; other covers stay cover-crop.
 */
const HOME_COVER_FIT = new Set();

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

async function writeCover(id, publicUrl, horizontalBias = 0.5, nudgePx = 0) {
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

  const TARGET_W = id === "others" ? 2400 : 1600;
  const TARGET_H = id === "others" ? 3000 : 2000;
  const targetRatio = TARGET_W / TARGET_H;
  const bias = Math.min(1, Math.max(0, horizontalBias));
  const outPath = path.join(COVERS, `${id}.webp`);

  const prepared = await sharp(src).rotate().toBuffer();
  const { width: srcW = 0, height: srcH = 0 } = await sharp(prepared).metadata();
  if (!srcW || !srcH) {
    console.warn("Bad cover dimensions", publicUrl);
    return;
  }

  if (HOME_COVER_FIT.has(id)) {
    // Full width + height visible; pad with blurred cover so card stays 4:5.
    const bg = await sharp(prepared)
      .resize(TARGET_W, TARGET_H, { fit: "cover", position: "centre" })
      .blur(48)
      .modulate({ brightness: 0.92 })
      .toBuffer();
    const fg = await sharp(prepared)
      .resize(TARGET_W, TARGET_H, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .toBuffer();
    await sharp(bg)
      .composite([{ input: fg, left: nudgePx, top: 0 }])
      .webp({ quality: 95, effort: 5 })
      .toFile(outPath);
    const notes = [
      "fit centre — bed + nightstands",
      nudgePx ? `nudge ${nudgePx}px` : null,
    ].filter(Boolean);
    console.log("cover", id, `(${notes.join(", ")})`);
    return;
  }

  const focus = HOME_COVER_FOCUS[id];
  if (focus && srcW / srcH > targetRatio) {
    const x = Math.min(1, Math.max(0, focus.x ?? 0.5));
    const span = Math.min(1, Math.max(0.2, focus.span ?? 0.55));
    // Bed + nightstand strip, then cover-crop into 4:5 (same size, no letterbox).
    let extractW = Math.min(srcW, Math.round(srcW * span));
    let extractLeft = Math.round(x * srcW - extractW / 2);
    // Nudge in final-cover pixels → source pixels (positive = right).
    extractLeft -= Math.round((nudgePx * extractW) / TARGET_W);
    extractLeft = Math.min(Math.max(0, extractLeft), srcW - extractW);
    await sharp(prepared)
      .extract({ left: extractLeft, top: 0, width: extractW, height: srcH })
      .resize(TARGET_W, TARGET_H, { fit: "cover", position: "centre" })
      .webp({ quality: 95, effort: 5 })
      .toFile(outPath);
    const notes = [
      `focus x=${focus.x} span=${focus.span}`,
      nudgePx ? `nudge ${nudgePx}px` : null,
    ].filter(Boolean);
    console.log("cover", id, `(${notes.join(", ")})`);
    return;
  }

  let left = 0;
  let top = 0;
  let cropW = srcW;
  let cropH = srcH;

  if (srcW / srcH > targetRatio) {
    cropH = srcH;
    cropW = Math.round(srcH * targetRatio);
    const maxLeft = srcW - cropW;
    left = Math.round(maxLeft * bias);
    // Nudge in final-cover pixels → source pixels.
    left += Math.round((nudgePx * cropW) / TARGET_W);
    left = Math.min(Math.max(0, left), maxLeft);
  } else {
    cropW = srcW;
    cropH = Math.round(srcW / targetRatio);
    top = Math.round((srcH - cropH) * 0.5);
  }

  await sharp(prepared)
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width: TARGET_W, height: TARGET_H })
    .webp({ quality: 95, effort: 5 })
    .toFile(outPath);
  const notes = [
    bias !== 0.5 ? `bias ${bias.toFixed(2)}` : null,
    nudgePx ? `nudge ${nudgePx}px` : null,
  ].filter(Boolean);
  console.log("cover", id, notes.length ? `(${notes.join(", ")})` : "");
}

/** Named suites as products under Yatak Odası / Yemek Odası. */
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
  const familyOrder = sortKeys([...families.keys()], order.collections);

  for (const room of ROOMS) {
    for (const family of familyOrder) {
      const imageUrls = families.get(family)?.[room.dir];
      if (!imageUrls?.length) continue;
      const title = `${familyName(family)} ${room.label}`;
      covers[room.dir] ??= imageUrls[0];
      items.push({
        id: nextId(),
        title,
        categoryId: room.dir,
        collection: title,
        imageUrl: imageUrls[0],
        imageUrls,
      });
      console.log(`  [${room.dir}] ${title} (${imageUrls.length} foto)`);
    }
  }

  return { items, covers, rooms: ROOMS.map((r) => r.dir) };
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
  Object.assign(covers, HOME_COVER_OVERRIDES);

  const categoryIds = [...PRODUCT_DIRS, ...collections.rooms, "others"];
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
    await writeCover(
      id,
      url,
      HOME_COVER_BIAS[id] ?? 0.5,
      HOME_COVER_NUDGE_PX[id] ?? 0,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

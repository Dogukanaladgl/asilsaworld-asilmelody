import type { LocalizedText } from "@/lib/i18n";
import type { FurnitureItem } from "@/lib/data";
import {
  catalogItems,
  catalogYear,
  type CatalogItem,
} from "@/lib/catalog.generated";

export { catalogItems, catalogYear };
export type { CatalogItem };

export type CatalogCategoryId = CatalogItem["categoryId"];

export type CatalogCategory = {
  id: CatalogCategoryId;
  /** Pretty public URL slug, e.g. /koleksiyon/salon */
  slug: string;
  label: LocalizedText;
  blurb: LocalizedText;
  /** Shown on the home “explore by collection” grid */
  onHome: boolean;
};

/** Named bedroom + dining suite, e.g. “Alaçatı Yemek Odası & Yatak Odası Koleksiyonu”. */
function roomCollection(
  id: CatalogCategoryId,
  name: LocalizedText,
): CatalogCategory {
  return {
    id,
    slug: id,
    onHome: true,
    label: {
      tr: `${name.tr} Yemek Odası & Yatak Odası Koleksiyonu`,
      en: `${name.en} Dining & Bedroom Collection`,
      ja: `${name.ja} ダイニング & ベッドルーム コレクション`,
      es: `Colección ${name.es} Comedor y Dormitorio`,
      ru: `Коллекция ${name.ru}: столовая и спальня`,
    },
    blurb: {
      tr: `2027 güncel katalog — ${name.tr} yatak odası ve yemek odası takımları.`,
      en: `2027 current catalog — ${name.en} bedroom and dining room sets.`,
      ja: `2027最新カタログ — ${name.ja}のベッドルームとダイニング。`,
      es: `Catálogo 2027 — dormitorio y comedor ${name.es}.`,
      ru: `Актуальный каталог 2027 — спальня и столовая ${name.ru}.`,
    },
  };
}

export const catalogCategories: CatalogCategory[] = [
  {
    id: "living",
    slug: "salon",
    onHome: true,
    label: {
      tr: "Salon Takımı & Oturma Grubu",
      en: "Salon & Living Groups",
      ja: "サロン & リビング",
      es: "Salón y grupos de estar",
      ru: "Салон и гостиные группы",
    },
    blurb: {
      tr: "2027 güncel katalog — isimli oturma grupları, fiyata göre sıralı.",
      en: "2027 current catalog — named living groups, ordered by price.",
      ja: "2027最新カタログ — 価格順のリビングセット。",
      es: "Catálogo 2027 — grupos con nombre, ordenados por precio.",
      ru: "Актуальный каталог 2027 — именные гостиные, по цене.",
    },
  },
  {
    id: "bedset",
    slug: "yatak-baza",
    onHome: true,
    label: {
      tr: "Yatak Baza Başlık & Karyola",
      en: "Bed Bases, Headboards & Frames",
      ja: "ベッドベース・ヘッドボード",
      es: "Bases, cabeceros y camas",
      ru: "Основания, изголовья и кровати",
    },
    blurb: {
      tr: "2027 güncel katalog — baza, başlık ve karyola modelleri.",
      en: "2027 current catalog — bases, headboards and bedsteads.",
      ja: "2027最新カタログ — ベッドベース・ヘッドボード。",
      es: "Catálogo 2027 — bases, cabeceros y camas.",
      ru: "Актуальный каталог 2027 — основания, изголовья и кровати.",
    },
  },
  {
    id: "corner",
    slug: "kose",
    onHome: true,
    label: {
      tr: "Köşe Koltuk & L Oturma",
      en: "Corner Sofas & L-Living",
      ja: "コーナーソファ",
      es: "Sofás esquinados y L",
      ru: "Угловые диваны",
    },
    blurb: {
      tr: "2027 güncel katalog — köşe ve L oturma grupları.",
      en: "2027 current catalog — corner and L-shaped living groups.",
      ja: "2027最新カタログ — コーナー＆L字ソファ。",
      es: "Catálogo 2027 — sofás esquinados y en L.",
      ru: "Актуальный каталог 2027 — угловые и L-образные группы.",
    },
  },
  roomCollection("alacati", {
    tr: "Alaçatı",
    en: "Alaçatı",
    ja: "アラチャトゥ",
    es: "Alaçatı",
    ru: "Алачаты",
  }),
  roomCollection("alisya-gold", {
    tr: "Alisya Gold",
    en: "Alisya Gold",
    ja: "アリシャ ゴールド",
    es: "Alisya Gold",
    ru: "Алисья Голд",
  }),
  roomCollection("alyans", {
    tr: "Alyans",
    en: "Alyans",
    ja: "アリャンス",
    es: "Alyans",
    ru: "Альянс",
  }),
  roomCollection("tokyo", {
    tr: "Tokyo",
    en: "Tokyo",
    ja: "トーキョー",
    es: "Tokyo",
    ru: "Токио",
  }),
  {
    id: "others",
    slug: "digerleri",
    onHome: true,
    label: {
      tr: "Diğerleri",
      en: "Others",
      ja: "その他",
      es: "Otros",
      ru: "Другое",
    },
    blurb: {
      tr: "TV ünitesi, çeyiz ve bahçe setleri.",
      en: "TV units, trousseau and garden sets.",
      ja: "TVボード、その他。",
      es: "Muebles TV, ajuar y jardín.",
      ru: "ТВ-тумбы, приданое и сад.",
    },
  },
];

/** Sub-categories nested under “Diğerleri” until their own photo sets arrive */
export const otherSubcategories: {
  id: string;
  label: LocalizedText;
}[] = [
  {
    id: "tv",
    label: {
      tr: "TV Ünitesi & Masa Sandalye",
      en: "TV Units & Table–Chair Sets",
      ja: "TVボード & テーブルチェア",
      es: "Mueble TV y mesa–silla",
      ru: "ТВ-тумбы, столы и стулья",
    },
  },
  {
    id: "wedding",
    label: {
      tr: "Düğün & Çeyiz Setleri",
      en: "Wedding & Trousseau Sets",
      ja: "ウェディング & 嫁入りセット",
      es: "Sets de boda y ajuar",
      ru: "Свадебные и приданые наборы",
    },
  },
  {
    id: "outdoor",
    label: {
      tr: "Çay & Balkon & Bahçe Seti",
      en: "Tea, Balcony & Garden Sets",
      ja: "ティー・バルコニー・ガーデン",
      es: "Té, balcón y jardín",
      ru: "Чайные, балконные и садовые наборы",
    },
  },
];

const defaultDescription: LocalizedText = {
  tr: "Asil's a World 2027 güncel katalog seçkisi. Görseller bilgilendirme amaçlıdır; temin ve detay için yazın.",
  en: "From the Asil's a World 2027 catalog. Images are for inquiry; ask us about availability.",
  ja: "Asil's a World 2027カタログより。詳細・納期はお問い合わせください。",
  es: "Del catálogo 2027 de Asil's a World. Consulte disponibilidad.",
  ru: "Из каталога Asil's a World 2027. Уточните наличие у нас.",
};

export function getHomeCategories() {
  return catalogCategories.filter((c) => c.onHome);
}

export function getCategory(id: string) {
  return catalogCategories.find((c) => c.id === id) ?? null;
}

export function getCategoryBySlug(slug: string) {
  return catalogCategories.find((c) => c.slug === slug) ?? null;
}

export function getCategoryPath(id: CatalogCategoryId) {
  const category = getCategory(id);
  return `/koleksiyon/${category?.slug ?? id}`;
}

export function getItemsByCategory(id: CatalogCategoryId) {
  return catalogItems.filter((item) => item.categoryId === id);
}

export function getCategoryCover(id: CatalogCategoryId): string {
  return `/catalog/2027/covers/${id}.webp`;
}

export function isCatalogCategoryId(id: string): id is CatalogCategoryId {
  return catalogCategories.some((c) => c.id === id);
}

/** Adapt catalog items for the existing lightbox */
export function toFurnitureItem(item: CatalogItem): FurnitureItem {
  const category = getCategory(item.categoryId);
  const imageUrls =
    item.imageUrls?.length > 0 ? item.imageUrls : [item.imageUrl];
  return {
    id: item.id,
    title: item.collection ?? item.title,
    category: category?.label ?? {
      tr: item.categoryId,
      en: item.categoryId,
      ja: item.categoryId,
      es: item.categoryId,
      ru: item.categoryId,
    },
    description: defaultDescription,
    imageUrl: item.imageUrl,
    imageUrls,
  };
}

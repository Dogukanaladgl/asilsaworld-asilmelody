import type { LocalizedText } from "@/lib/i18n";
import type { FurnitureItem } from "@/lib/data";
import {
  catalogItems,
  catalogYear,
  type CatalogCategoryId,
  type CatalogItem,
} from "@/lib/catalog.generated";

export { catalogItems, catalogYear };
export type { CatalogCategoryId, CatalogItem };

export type CatalogCategory = {
  id: CatalogCategoryId;
  label: LocalizedText;
  blurb: LocalizedText;
  /** Shown on the home “explore by collection” grid */
  onHome: boolean;
};

export const catalogCategories: CatalogCategory[] = [
  {
    id: "living",
    onHome: true,
    label: {
      tr: "Salon Takımı & Oturma Grubu",
      en: "Salon & Living Groups",
      ja: "サロン & リビング",
      es: "Salón y grupos de estar",
      ru: "Салон и гостиные группы",
    },
    blurb: {
      tr: "2027 güncel katalog — oturma grupları ve salon takımları.",
      en: "2027 current catalog — living groups and salon sets.",
      ja: "2027最新カタログ — リビングセット。",
      es: "Catálogo 2027 — grupos de estar y salones.",
      ru: "Актуальный каталог 2027 — гостиные группы.",
    },
  },
  {
    id: "bedroom",
    onHome: true,
    label: {
      tr: "Yatak Odası & Yaşam Odası",
      en: "Bedroom & Living Room",
      ja: "ベッドルーム",
      es: "Dormitorio y sala",
      ru: "Спальня и жилые комнаты",
    },
    blurb: {
      tr: "2027 güncel katalog — yatak odası takımları.",
      en: "2027 current catalog — bedroom suites.",
      ja: "2027最新カタログ — ベッドルームセット。",
      es: "Catálogo 2027 — dormitorios.",
      ru: "Актуальный каталог 2027 — спальни.",
    },
  },
  {
    id: "bedset",
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
      ja: "2027最新カタログ — ベッド関連モデル。",
      es: "Catálogo 2027 — bases y cabeceros.",
      ru: "Актуальный каталог 2027 — кровати и основания.",
    },
  },
  {
    id: "dining",
    onHome: true,
    label: {
      tr: "Yemek Odası & Salon Takımı",
      en: "Dining Room & Salon Sets",
      ja: "ダイニング & サロン",
      es: "Comedor y salón",
      ru: "Столовые и салонные комплекты",
    },
    blurb: {
      tr: "2027 güncel katalog — yemek odası takımları.",
      en: "2027 current catalog — dining sets.",
      ja: "2027最新カタログ — ダイニングセット。",
      es: "Catálogo 2027 — comedores.",
      ru: "Актуальный каталог 2027 — столовые.",
    },
  },
  {
    id: "lamia",
    onHome: true,
    label: {
      tr: "Lamia Koleksiyonu",
      en: "Lamia Collection",
      ja: "Lamia コレクション",
      es: "Colección Lamia",
      ru: "Коллекция Lamia",
    },
    blurb: {
      tr: "2027 güncel katalog — Lamia özel seçkisi.",
      en: "2027 current catalog — the Lamia selection.",
      ja: "2027最新カタログ — Lamiaセレクション。",
      es: "Catálogo 2027 — selección Lamia.",
      ru: "Актуальный каталог 2027 — коллекция Lamia.",
    },
  },
  {
    id: "others",
    onHome: true,
    label: {
      tr: "Diğerleri",
      en: "Others",
      ja: "その他",
      es: "Otros",
      ru: "Другое",
    },
    blurb: {
      tr: "Köşe koltuk, TV ünitesi, çeyiz ve bahçe setleri.",
      en: "Corner sofas, TV units, trousseau and garden sets.",
      ja: "コーナーソファ、TVボード、その他。",
      es: "Sofás esquinados, muebles TV, ajuar y jardín.",
      ru: "Угловые диваны, ТВ-тумбы, приданое и сад.",
    },
  },
];

/** Sub-categories nested under “Diğerleri” until their own photo sets arrive */
export const otherSubcategories: {
  id: string;
  label: LocalizedText;
}[] = [
  {
    id: "corner",
    label: {
      tr: "Köşe Koltuk & L Oturma Grubu",
      en: "Corner Sofa & L-Living Groups",
      ja: "コーナー & L字ソファ",
      es: "Sofás esquinados y grupos en L",
      ru: "Угловые и L-образные группы",
    },
  },
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
  tr: "Asil's a World 2027 güncel katalog seçkisi. Detay ve stok için bilgilendirme alın.",
  en: "From the Asil's a World 2027 current catalog. Inquire for details and availability.",
  ja: "Asil's a World 2027最新カタログより。詳細はお問い合わせください。",
  es: "Del catálogo actual 2027 de Asil's a World. Consulte disponibilidad.",
  ru: "Из актуального каталога Asil's a World 2027. Уточните наличие.",
};

export function getHomeCategories() {
  return catalogCategories.filter((c) => c.onHome);
}

export function getCategory(id: string) {
  return catalogCategories.find((c) => c.id === id) ?? null;
}

export function getItemsByCategory(id: CatalogCategoryId) {
  return catalogItems.filter((item) => item.categoryId === id);
}

/** Curated, high-clarity covers for the home category grid */
export const categoryCoverImages: Record<CatalogCategoryId, string> = {
  living: "/catalog/2027/covers/living.webp",
  bedroom: "/catalog/2027/covers/bedroom.webp",
  bedset: "/catalog/2027/covers/bedset.webp",
  dining: "/catalog/2027/covers/dining.webp",
  lamia: "/catalog/2027/covers/lamia.webp",
  others: "/catalog/2027/covers/others.webp",
};

export function getCategoryCover(id: CatalogCategoryId): string {
  return (
    categoryCoverImages[id] ??
    catalogItems.find((item) => item.categoryId === id)?.imageUrl ??
    categoryCoverImages.living
  );
}

export function isCatalogCategoryId(id: string): id is CatalogCategoryId {
  return catalogCategories.some((c) => c.id === id);
}

/** Adapt catalog items for the existing lightbox */
export function toFurnitureItem(item: CatalogItem): FurnitureItem {
  const category = getCategory(item.categoryId);
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
  };
}

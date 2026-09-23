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
      tr: "2027 Güncel Katalog — Salon Takımı & Oturma Grupları.",
      en: "2027 Current Catalog — Salon Sets & Living Groups.",
      ja: "2027最新カタログ — サロンセット & リビンググループ。",
      es: "Catálogo Actual 2027 — conjuntos de salón y grupos de estar.",
      ru: "Актуальный Каталог 2027 — салонные комплекты и гостиные группы.",
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
      tr: "2027 Güncel Katalog — Baza, Başlık & Karyola Modelleri.",
      en: "2027 Current Catalog — Base, Headboard & Bedstead Models.",
      ja: "2027最新カタログ — ベース・ヘッドボード・ベッドフレームモデル。",
      es: "Catálogo Actual 2027 — Modelos de Base, Cabecero y Cama.",
      ru: "Актуальный Каталог 2027 — Модели Оснований, Изголовий и Кроватей.",
    },
  },
  {
    id: "corner",
    slug: "kose",
    onHome: true,
    label: {
      tr: "Köşe Koltuk & L Oturma Grubu",
      en: "Corner Sofas & L-Living Groups",
      ja: "コーナーソファ",
      es: "Sofás esquinados y L",
      ru: "Угловые диваны",
    },
    blurb: {
      tr: "2027 Güncel Katalog — Köşe Takımları & L Oturma Grupları.",
      en: "2027 Current Catalog — Corner Sets & L Living Groups.",
      ja: "2027最新カタログ — コーナーセット & L字リビンググループ。",
      es: "Catálogo Actual 2027 — Conjuntos Esquinados & Grupos de Estar en L.",
      ru: "Актуальный Каталог 2027 — Угловые Комплекты & L-Образные Гостиные Группы.",
    },
  },
  {
    id: "bedroom",
    slug: "yatak-odasi",
    onHome: true,
    label: {
      tr: "Yatak Odası",
      en: "Bedroom",
      ja: "ベッドルーム",
      es: "Dormitorio",
      ru: "Спальня",
    },
    blurb: {
      tr: "2027 Güncel Katalog — Alaçatı, Alisya Gold, Alyans ve Tokyo Yatak Odası Koleksiyonları.",
      en: "2027 Current Catalog — Alaçatı, Alisya Gold, Alyans and Tokyo Bedroom Collections.",
      ja: "2027最新カタログ — アラチャトゥ、アリシャ ゴールド、アリャンス、トーキョーのベッドルームコレクション。",
      es: "Catálogo Actual 2027 — Colecciones de Dormitorio Alaçatı, Alisya Gold, Alyans y Tokyo.",
      ru: "Актуальный Каталог 2027 — Коллекции Спален Alaçatı, Alisya Gold, Alyans и Tokyo.",
    },
  },
  {
    id: "dining",
    slug: "yemek-odasi",
    onHome: true,
    label: {
      tr: "Yemek Odası",
      en: "Dining Room",
      ja: "ダイニング",
      es: "Comedor",
      ru: "Столовая",
    },
    blurb: {
      tr: "2027 Güncel Katalog — Alaçatı, Alisya Gold, Alyans ve Tokyo Yemek Odası Koleksiyonları.",
      en: "2027 Current Catalog — Alaçatı, Alisya Gold, Alyans and Tokyo Dining Collections.",
      ja: "2027最新カタログ — アラチャトゥ、アリシャ ゴールド、アリャンス、トーキョーのダイニングコレクション。",
      es: "Catálogo Actual 2027 — Colecciones de Comedor Alaçatı, Alisya Gold, Alyans y Tokyo.",
      ru: "Актуальный Каталог 2027 — Коллекции Столовых Alaçatı, Alisya Gold, Alyans и Tokyo.",
    },
  },
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
      tr: "TV Ünitesi, Çeyiz ve Bahçe Setleri.",
      en: "TV Units, Trousseau and Garden Sets.",
      ja: "TVボード、嫁入りセット、ガーデンセット。",
      es: "Muebles TV, Ajuar y Sets de Jardín.",
      ru: "ТВ-Тумбы, Приданое и Садовые Наборы.",
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
  tr: "Asil's a World 2027 Güncel Katalog seçkisi. Görseller bilgilendirme amaçlıdır; temin ve detay için yazın.",
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

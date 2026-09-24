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
    id: "corner",
    slug: "kose",
    onHome: true,
    label: {
      tr: "Köşe Koltuk & L Oturma Grubu Modelleri",
      en: "Corner Sofa & L-Living Group Models",
      ja: "コーナーソファ & L字リビングモデル",
      es: "Modelos de sofás esquinados y grupos en L",
      ru: "Модели угловых диванов и L-групп",
    },
    blurb: {
      tr: "2027 Güncel Katalog — Köşe Koltuk & L Oturma Grubu Modelleri.",
      en: "2027 Current Catalog — Corner Sofa & L-Living Group Models.",
      ja: "2027最新カタログ — コーナーソファ & L字リビングモデル。",
      es: "Catálogo Actual 2027 — Modelos de sofás esquinados y grupos en L.",
      ru: "Актуальный Каталог 2027 — Модели угловых диванов и L-групп.",
    },
  },
  {
    id: "living",
    slug: "salon",
    onHome: true,
    label: {
      tr: "Salon Takımı & Oturma Grubu Modelleri",
      en: "Salon & Living Group Models",
      ja: "サロン & リビングモデル",
      es: "Modelos de salón y grupos de estar",
      ru: "Модели салонов и гостиных групп",
    },
    blurb: {
      tr: "2027 Güncel Katalog — Salon Takımı & Oturma Grubu Modelleri.",
      en: "2027 Current Catalog — Salon & Living Group Models.",
      ja: "2027最新カタログ — サロン & リビングモデル。",
      es: "Catálogo Actual 2027 — Modelos de salón y grupos de estar.",
      ru: "Актуальный Каталог 2027 — Модели салонов и гостиных групп.",
    },
  },
  {
    id: "bedroom",
    slug: "yatak-odasi",
    onHome: true,
    label: {
      tr: "Yatak Odası & Yaşam Odası Modelleri",
      en: "Bedroom & Living Room Models",
      ja: "ベッドルーム & リビングルームモデル",
      es: "Modelos de dormitorio y sala",
      ru: "Модели спален и жилых комнат",
    },
    blurb: {
      tr: "2027 Güncel Katalog — Yatak Odası & Yaşam Odası Modelleri.",
      en: "2027 Current Catalog — Bedroom & Living Room Models.",
      ja: "2027最新カタログ — ベッドルーム & リビングルームモデル。",
      es: "Catálogo Actual 2027 — Modelos de dormitorio y sala.",
      ru: "Актуальный Каталог 2027 — Модели спален и жилых комнат.",
    },
  },
  {
    id: "bedset",
    slug: "yatak-baza",
    onHome: true,
    label: {
      tr: "Yatak Baza Başlık Seti & Karyola Modelleri",
      en: "Bed Base, Headboard & Bedstead Models",
      ja: "ベッドベース・ヘッドボード・ベッドフレームモデル",
      es: "Modelos de base, cabecero y cama",
      ru: "Модели оснований, изголовий и кроватей",
    },
    blurb: {
      tr: "2027 Güncel Katalog — Yatak Baza Başlık Seti & Karyola Modelleri.",
      en: "2027 Current Catalog — Bed Base, Headboard & Bedstead Models.",
      ja: "2027最新カタログ — ベッドベース・ヘッドボード・ベッドフレームモデル。",
      es: "Catálogo Actual 2027 — Modelos de base, cabecero y cama.",
      ru: "Актуальный Каталог 2027 — Модели оснований, изголовий и кроватей.",
    },
  },
  {
    id: "dining",
    slug: "yemek-odasi",
    onHome: true,
    label: {
      tr: "Yemek Odası & Salon Takımı Modelleri",
      en: "Dining Room & Salon Set Models",
      ja: "ダイニング & サロンセットモデル",
      es: "Modelos de comedor y salón",
      ru: "Модели столовых и салонных комплектов",
    },
    blurb: {
      tr: "2027 Güncel Katalog — Yemek Odası & Salon Takımı Modelleri.",
      en: "2027 Current Catalog — Dining Room & Salon Set Models.",
      ja: "2027最新カタログ — ダイニング & サロンセットモデル。",
      es: "Catálogo Actual 2027 — Modelos de comedor y salón.",
      ru: "Актуальный Каталог 2027 — Модели столовых и салонных комплектов.",
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
      tr: "TV Ünitesi & Masa Sandalye, Düğün & Çeyiz ve Çay & Balkon & Bahçe Seti Modelleri.",
      en: "TV Units & Table–Chair, Wedding & Trousseau, and Tea, Balcony & Garden Set Models.",
      ja: "TVボード、嫁入りセット、ティー・バルコニー・ガーデンモデル。",
      es: "Muebles TV, ajuar y sets de té, balcón y jardín.",
      ru: "ТВ-тумбы, приданое и чайные, балконные и садовые наборы.",
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
      tr: "TV Ünitesi & Masa Sandalye Modelleri",
      en: "TV Unit & Table–Chair Models",
      ja: "TVボード & テーブルチェアモデル",
      es: "Modelos de mueble TV y mesa–silla",
      ru: "Модели ТВ-тумб, столов и стульев",
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
      tr: "Çay & Balkon & Bahçe Seti Modelleri",
      en: "Tea, Balcony & Garden Set Models",
      ja: "ティー・バルコニー・ガーデンモデル",
      es: "Modelos de té, balcón y jardín",
      ru: "Модели чайных, балконных и садовых наборов",
    },
  },
];

const defaultDescription: LocalizedText = {
  tr: "Asil's a World 2027 Güncel Katalog Seçkisi.",
  en: "Asil's a World 2027 Current Catalog Selection.",
  ja: "Asil's a World 2027 最新カタログ選定。",
  es: "Selección del Catálogo Actual 2027 de Asil's a World.",
  ru: "Подборка Актуальный Каталог Asil's a World 2027.",
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

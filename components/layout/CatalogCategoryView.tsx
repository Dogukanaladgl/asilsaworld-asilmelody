"use client";

import Link from "next/link";
import CatalogGrid from "@/components/layout/CatalogGrid";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  catalogYear,
  getCategory,
  getItemsByCategory,
  otherSubcategories,
  type CatalogCategoryId,
} from "@/lib/catalog";

export default function CatalogCategoryView({
  categoryId,
}: {
  categoryId: CatalogCategoryId;
}) {
  const { language, t } = useLanguage();
  const category = getCategory(categoryId);
  const items = getItemsByCategory(categoryId);

  if (!category) return null;

  return (
    <main className="bg-asilsa-cream px-fluid pb-section pt-[calc(5.5rem+env(safe-area-inset-top))] md:pt-36">
      <div className="mx-auto mb-10 max-w-7xl md:mb-14">
        <Link
          href="/#spaces"
          className="text-[0.65rem] uppercase tracking-[0.28em] text-museum-dark/45 transition-colors hover:text-asilsa-gold"
        >
          ← {t.spaces.title}
        </Link>
        <p className="mt-6 text-fluid-caption uppercase tracking-[0.32em] text-asilsa-gold">
          {t.spaces.catalogBadge.replace("{year}", String(catalogYear))}
        </p>
        <h1 className="text-fluid-display mt-3 font-serif font-light tracking-wide text-museum-dark">
          {category.label[language]}
        </h1>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed tracking-wide text-museum-dark/55">
          {category.blurb[language]}
        </p>
      </div>

      {categoryId === "others" ? (
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
            {otherSubcategories.map((sub) => (
              <div
                key={sub.id}
                className="border border-museum-dark/10 bg-asilsa-beige/40 px-5 py-8 text-center"
              >
                <p className="font-serif text-base font-light tracking-wide text-museum-dark">
                  {sub.label[language]}
                </p>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-museum-dark/40">
                  {t.spaces.comingSoon}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-md text-center text-sm font-light text-museum-dark/50">
            {t.spaces.othersNote}
          </p>
        </div>
      ) : (
        <CatalogGrid items={items} emptyText={t.spaces.emptyCategory} />
      )}
    </main>
  );
}

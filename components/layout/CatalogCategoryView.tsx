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
    <div className="bg-asilsa-cream px-fluid pb-section pt-6 sm:pt-8 md:pt-12">
      <header className="mx-auto mb-8 max-w-7xl md:mb-14">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-[0.62rem] uppercase tracking-[0.22em] text-museum-dark/45 transition-colors hover:text-asilsa-gold sm:text-[0.65rem] sm:tracking-[0.28em]"
        >
          ← {t.spaces.title}
        </Link>
        <p className="mt-4 text-fluid-caption uppercase tracking-[0.28em] text-asilsa-gold sm:mt-5 sm:tracking-[0.32em]">
          {t.spaces.catalogBadge.replace("{year}", String(catalogYear))}
        </p>
        <h1 className="text-fluid-display mt-2.5 break-words font-serif font-light tracking-wide text-museum-dark sm:mt-3">
          {category.label[language]}
        </h1>
        <p className="mt-3 max-w-xl text-sm font-light leading-relaxed tracking-wide text-museum-dark/55 sm:mt-4">
          {category.blurb[language]}
        </p>
      </header>

      {categoryId === "others" ? (
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 md:gap-4">
            {otherSubcategories.map((sub) => (
              <div
                key={sub.id}
                className="border border-museum-dark/10 bg-asilsa-beige/40 px-4 py-7 text-center sm:px-5 sm:py-8"
              >
                <h2 className="font-serif text-[0.95rem] font-light leading-snug tracking-wide text-museum-dark sm:text-base">
                  {sub.label[language]}
                </h2>
                <p className="mt-3 text-[0.62rem] uppercase tracking-[0.2em] text-museum-dark/40 sm:text-[0.65rem] sm:tracking-[0.22em]">
                  {t.spaces.comingSoon}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-md text-center text-sm font-light leading-relaxed text-museum-dark/50 sm:mt-10">
            {t.spaces.othersNote}
          </p>
        </div>
      ) : (
        <CatalogGrid items={items} emptyText={t.spaces.emptyCategory} />
      )}
    </div>
  );
}

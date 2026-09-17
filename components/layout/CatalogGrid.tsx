"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import LightboxModal from "@/components/ui/LightboxModal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  toFurnitureItem,
  type CatalogItem,
} from "@/lib/catalog";
import type { FurnitureItem } from "@/lib/data";

type CatalogGridProps = {
  items: CatalogItem[];
  emptyText: string;
};

export default function CatalogGrid({ items, emptyText }: CatalogGridProps) {
  const [selected, setSelected] = useState<FurnitureItem | null>(null);
  const { t } = useLanguage();

  if (items.length === 0) {
    return (
      <p className="mx-auto max-w-md text-center text-sm font-light leading-relaxed text-museum-dark/55">
        {emptyText}
      </p>
    );
  }

  return (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((item, index) => {
          const isFeatureSheet = item.imageUrl.includes("features");

          return (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.28) }}
            onClick={() => setSelected(toFurnitureItem(item))}
            aria-label={`${item.collection ?? item.title} — ${t.collections.inquire}`}
            className={`group relative block aspect-[4/5] w-full overflow-hidden text-left ${
              isFeatureSheet ? "bg-asilsa-cream" : ""
            }`}
          >
            <Image
              src={item.imageUrl}
              alt={item.collection ?? item.title}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={
                isFeatureSheet
                  ? "object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
                  : "object-cover transition-transform duration-700 group-hover:scale-105"
              }
            />
            {!isFeatureSheet && (
              <div className="absolute inset-0 bg-gradient-to-t from-museum-dark/70 via-transparent to-transparent opacity-90 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
            )}
            <div className="absolute inset-x-0 bottom-0 flex translate-y-0 flex-col items-center gap-1.5 p-4 opacity-100 transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              <p className={`font-serif text-sm tracking-wide ${isFeatureSheet ? "text-museum-dark" : "text-asilsa-cream"}`}>
                {item.collection ?? item.title}
              </p>
              <span className={`border px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] backdrop-blur-[2px] ${
                isFeatureSheet
                  ? "border-museum-dark/40 bg-asilsa-cream/80 text-museum-dark"
                  : "border-asilsa-cream/90 bg-asilsa-cream/15 text-asilsa-cream"
              }`}>
                {t.collections.inquire}
              </span>
            </div>
          </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <LightboxModal
            isOpen={!!selected}
            onClose={() => setSelected(null)}
            item={selected}
          />
        )}
      </AnimatePresence>
    </>
  );
}

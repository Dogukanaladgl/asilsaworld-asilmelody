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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((item, index) => {
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
            className="group relative block aspect-[3/2] w-full overflow-hidden bg-asilsa-beige/40 text-left"
          >
            {/* Same src/quality/sizes as the foreground so the browser reuses one download. */}
            <Image
              src={item.imageUrl}
              alt=""
              aria-hidden
              fill
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="scale-110 object-cover blur-2xl brightness-95"
            />
            <Image
              src={item.imageUrl}
              alt={item.collection ?? item.title}
              fill
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {(item.imageUrls?.length ?? 0) > 1 && (
              <span className="absolute left-2.5 top-2.5 z-10 border border-museum-dark/15 bg-asilsa-cream/90 px-2 py-1 text-[0.55rem] uppercase tracking-[0.16em] text-museum-dark backdrop-blur-sm">
                {item.imageUrls!.length} foto
              </span>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-museum-dark/60 via-transparent to-transparent opacity-95 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-0 flex-col items-center gap-1 p-2.5 opacity-100 transition-all duration-500 sm:gap-1.5 sm:p-3.5 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              <p className="max-w-full break-words text-center font-serif text-[0.85rem] tracking-wide text-asilsa-cream sm:text-sm">
                {item.collection ?? item.title}
              </p>
              <span className="border border-asilsa-cream/90 bg-museum-dark/40 px-3.5 py-1.5 text-[0.58rem] uppercase tracking-[0.18em] text-asilsa-cream backdrop-blur-[2px] sm:px-4 sm:text-[0.6rem] sm:tracking-[0.22em]">
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

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

function CatalogCard({
  item,
  index,
  inquireLabel,
  onOpen,
}: {
  item: CatalogItem;
  index: number;
  inquireLabel: string;
  onOpen: () => void;
}) {
  const urls =
    item.imageUrls?.length > 0 ? item.imageUrls : [item.imageUrl];
  const multi = urls.length > 1;
  const src = item.imageUrl;
  const title = item.collection ?? item.title;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.28) }}
      onClick={onOpen}
      aria-label={`${title} — ${inquireLabel}`}
      className="group relative block aspect-[3/2] w-full overflow-hidden bg-asilsa-beige/40 text-left"
    >
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        quality={95}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="scale-110 object-cover blur-2xl brightness-95"
      />
      <Image
        src={src}
        alt={title}
        fill
        quality={95}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {multi && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-2.5 z-10 flex justify-center gap-1.5 sm:bottom-3"
          aria-hidden
        >
          {urls.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === 0 ? "bg-asilsa-cream" : "bg-asilsa-cream/40"
              }`}
            />
          ))}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-museum-dark/60 via-transparent to-transparent opacity-95 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
      <div
        className={`absolute inset-x-0 bottom-0 flex translate-y-0 flex-col items-center gap-1 p-2.5 opacity-100 transition-all duration-500 sm:gap-1.5 sm:p-3.5 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
          multi ? "pb-7 sm:pb-8" : ""
        }`}
      >
        <p className="max-w-full break-words text-center font-serif text-[0.85rem] tracking-wide text-asilsa-cream sm:text-sm">
          {title}
        </p>
        <span className="border border-asilsa-cream/90 bg-museum-dark/40 px-3.5 py-1.5 text-[0.58rem] uppercase tracking-[0.18em] text-asilsa-cream backdrop-blur-[2px] sm:px-4 sm:text-[0.6rem] sm:tracking-[0.22em]">
          {inquireLabel}
        </span>
      </div>
    </motion.button>
  );
}

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
        {items.map((item, index) => (
          <CatalogCard
            key={item.id}
            item={item}
            index={index}
            inquireLabel={t.collections.inquire}
            onOpen={() => setSelected(toFurnitureItem(item))}
          />
        ))}
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

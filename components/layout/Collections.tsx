"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import LightboxModal from "@/components/ui/LightboxModal";
import { furnitureData, type FurnitureItem } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

const aspectClasses = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[5/4]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/5]",
] as const;

export default function Collections() {
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);
  const { t } = useLanguage();

  return (
    <section
      id="collections"
      className="scroll-mt-28 bg-asilsa-cream px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto mb-16 max-w-7xl text-center md:mb-20">
        <h2 className="font-serif text-3xl font-light tracking-wide text-museum-dark md:text-4xl">
          {t.collections.title}
        </h2>
        <span className="mx-auto mt-5 block h-px w-12 bg-asilsa-gold" />
      </div>

      <div className="mx-auto max-w-7xl columns-1 gap-6 sm:columns-2 lg:columns-3">
        {furnitureData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group mb-6 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className={`relative block w-full cursor-pointer overflow-hidden text-left ${aspectClasses[index % aspectClasses.length]}`}
              aria-label={`${item.title} — ${t.collections.inquire}`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex translate-y-4 flex-col items-center gap-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-sm tracking-wide text-asilsa-cream">
                  {item.title}
                </p>
                <span className="border border-asilsa-cream/80 px-5 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-asilsa-cream transition-colors group-hover:bg-asilsa-cream/10">
                  {t.collections.inquire}
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <LightboxModal
            key={selectedItem.id}
            isOpen={!!selectedItem}
            onClose={() => setSelectedItem(null)}
            item={selectedItem}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

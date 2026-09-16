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
      className="scroll-mt-[calc(5rem+env(safe-area-inset-top))] bg-asilsa-cream px-fluid py-section md:scroll-mt-32"
    >
      <div className="mx-auto mb-10 max-w-7xl text-center sm:mb-12 md:mb-16 lg:mb-20">
        <p className="text-fluid-body mx-auto mb-3 max-w-xs font-light leading-relaxed tracking-wide text-museum-dark/55 sm:mb-4 sm:max-w-md md:mb-5">
          {t.collections.eyebrow}
        </p>
        <h2 className="text-fluid-display font-serif font-light tracking-wide text-museum-dark">
          {t.collections.title}
        </h2>
        <span className="mx-auto mt-4 block h-px w-10 bg-asilsa-gold sm:mt-5 sm:w-12" />
      </div>

      <div className="mx-auto max-w-7xl columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
        {furnitureData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group mb-4 break-inside-avoid sm:mb-6"
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
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Always visible on touch devices; hover-only from md up */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex translate-y-0 flex-col items-center gap-2 p-4 opacity-100 transition-all duration-500 sm:gap-3 sm:p-6 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <p className="font-serif text-sm tracking-wide text-asilsa-cream">
                  {item.title}
                </p>
                <span className="border border-asilsa-cream/90 bg-asilsa-cream/15 px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-asilsa-cream backdrop-blur-[2px] sm:px-5 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.25em]">
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

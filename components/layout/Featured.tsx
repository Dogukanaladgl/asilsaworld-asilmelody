"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import LightboxModal from "@/components/ui/LightboxModal";
import { furnitureData, type FurnitureItem } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Featured() {
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);
  const { t, language } = useLanguage();
  const items = furnitureData.slice(0, 3);

  return (
    <section className="bg-asilsa-cream px-fluid py-section">
      <div className="mx-auto mb-10 max-w-7xl text-center md:mb-14">
        <p className="text-fluid-caption uppercase tracking-[0.32em] text-museum-dark/45">
          {t.featured.eyebrow}
        </p>
        <h2 className="text-fluid-display mt-3 font-serif font-light tracking-wide text-museum-dark">
          {t.featured.title}
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3 md:gap-6">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="group"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              aria-label={`${item.title} — ${t.collections.inquire}`}
              className="block w-full cursor-pointer text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

                <span className="absolute inset-x-0 bottom-0 flex justify-center p-4 opacity-100 transition-all duration-500 sm:p-5 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <span className="border border-asilsa-cream/90 bg-asilsa-cream/15 px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-asilsa-cream backdrop-blur-[2px] sm:px-5 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.25em]">
                    {t.collections.inquire}
                  </span>
                </span>
              </div>
              <p className="mt-4 text-[0.6rem] uppercase tracking-[0.28em] text-asilsa-gold">
                {item.category[language]}
              </p>
              <h3 className="mt-2 font-serif text-xl font-light tracking-wide text-museum-dark transition-colors duration-300 group-hover:text-asilsa-gold">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-museum-dark/55">
                {item.description[language]}
              </p>
            </button>
          </motion.article>
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

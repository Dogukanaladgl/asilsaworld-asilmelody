"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { furnitureData } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Featured() {
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
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[0.6rem] uppercase tracking-[0.28em] text-asilsa-gold">
              {item.category[language]}
            </p>
            <h3 className="mt-2 font-serif text-xl font-light tracking-wide text-museum-dark">
              {item.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-museum-dark/55">
              {item.description[language]}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  getCategoryCover,
  getHomeCategories,
  type CatalogCategoryId,
} from "@/lib/catalog";

export default function Spaces() {
  const { t, language } = useLanguage();
  const categories = getHomeCategories();

  return (
    <section
      id="spaces"
      className="scroll-mt-[calc(5rem+env(safe-area-inset-top))] bg-asilsa-beige/30 px-fluid py-section md:scroll-mt-32"
    >
      <div className="mx-auto mb-10 max-w-7xl text-center md:mb-14">
        <p className="text-fluid-caption uppercase tracking-[0.32em] text-museum-dark/45">
          {t.spaces.eyebrow}
        </p>
        <h2 className="text-fluid-display mt-3 font-serif font-light tracking-wide text-museum-dark">
          {t.spaces.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm font-light tracking-wide text-museum-dark/50">
          {t.spaces.catalogNote}
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {categories.map((item, index) => {
          const cover = getCategoryCover(item.id as CatalogCategoryId);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
            >
              <Link
                href={`/katalog/${item.id}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={cover}
                  alt={item.label[language]}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-museum-dark/75 via-museum-dark/15 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-center text-[0.68rem] font-light leading-snug tracking-wide text-asilsa-cream sm:p-4 sm:text-[0.72rem]">
                  {item.label[language]}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

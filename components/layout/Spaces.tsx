"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  getCategoryCover,
  getCategoryPath,
  getHomeCategories,
  type CatalogCategoryId,
} from "@/lib/catalog";
import {
  getWindowScrollY,
  peekHomeScrollRestore,
  rememberHomeScroll,
} from "@/lib/scroll";

export default function Spaces() {
  const { t, language } = useLanguage();
  const categories = getHomeCategories();
  const lenis = useLenis();
  // Skip entrance motion when returning from a collection — avoids scroll hitch.
  const [skipIntro] = useState(() => peekHomeScrollRestore() != null);

  const rememberScroll = () => {
    rememberHomeScroll(getWindowScrollY(lenis));
  };

  return (
    <section
      id="spaces"
      aria-labelledby="spaces-heading"
      className="scroll-mt-[calc(5rem+env(safe-area-inset-top))] bg-asilsa-beige/30 px-fluid py-section md:scroll-mt-32"
    >
      <div className="mx-auto mb-8 max-w-7xl text-center sm:mb-10 md:mb-14">
        <p className="text-fluid-caption uppercase tracking-[0.28em] text-museum-dark/45 sm:tracking-[0.32em]">
          {t.spaces.eyebrow}
        </p>
        <h2
          id="spaces-heading"
          className="text-fluid-display mt-3 font-serif font-light tracking-wide text-museum-dark"
        >
          {t.spaces.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm font-light leading-relaxed tracking-wide text-museum-dark/50 sm:mt-4">
          {t.spaces.catalogNote}
        </p>
      </div>

      <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 md:gap-4">
        {categories.map((item, index) => {
          const cover = getCategoryCover(item.id as CatalogCategoryId);

          return (
            <motion.div
              key={item.id}
              initial={skipIntro ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: skipIntro ? 0 : index * 0.05,
              }}
            >
              <Link
                href={getCategoryPath(item.id as CatalogCategoryId)}
                scroll={false}
                onPointerDown={rememberScroll}
                onClick={rememberScroll}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={cover}
                  alt={item.label[language]}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-museum-dark/80 via-museum-dark/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 px-2.5 pb-3 pt-10 text-center text-[0.62rem] font-light leading-snug tracking-wide text-asilsa-cream sm:px-3 sm:pb-4 sm:text-[0.68rem] md:px-4 md:text-[0.72rem]">
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

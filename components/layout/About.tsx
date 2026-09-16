"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=90&w=2400&auto=format&fit=crop&dpr=2";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-gray-200/40 bg-asilsa-cream px-fluid py-section">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]"
        >
          <Image
            src={ABOUT_IMAGE}
            alt=""
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-lg md:py-8"
        >
          <p className="text-fluid-caption uppercase tracking-[0.32em] text-museum-dark/45">
            {t.about.eyebrow}
          </p>
          <h2 className="text-fluid-display mt-3 font-serif font-light tracking-wide text-museum-dark">
            {t.about.title}
          </h2>
          <span className="mt-5 block h-px w-12 bg-asilsa-gold" />
          <p className="mt-7 text-sm font-medium tracking-wide text-museum-dark md:text-base">
            {t.about.subtitle}
          </p>
          <p className="text-fluid-body mt-4 font-light leading-relaxed tracking-wide text-museum-dark/60">
            {t.about.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

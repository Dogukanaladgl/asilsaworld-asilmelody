"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function PartnerBanner() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="partner-heading"
      className="relative flex min-h-[min(70svh,40rem)] w-full items-center justify-center overflow-hidden bg-museum-spotlight px-fluid py-section md:min-h-[60svh]"
    >
      <div className="absolute inset-0 bg-museum-dark/20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-prose-hero text-center"
      >
        <p className="text-fluid-caption mb-4 uppercase tracking-[0.28em] text-asilsa-cream/60 sm:mb-5 sm:tracking-[0.35em]">
          {t.partner.eyebrow}
        </p>
        <h2
          id="partner-heading"
          className="text-fluid-display font-serif font-light leading-snug tracking-wide text-asilsa-cream"
        >
          {t.partner.title}
        </h2>
        <p className="text-fluid-body mx-auto mt-5 max-w-md font-light leading-relaxed tracking-wide text-asilsa-cream/75 sm:mt-6">
          {t.partner.description}
        </p>
        <a
          href="https://asilmelody.ddogukan.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-light mt-8 w-full sm:mt-10 sm:w-auto"
        >
          {t.partner.cta}
        </a>
      </motion.div>
    </section>
  );
}

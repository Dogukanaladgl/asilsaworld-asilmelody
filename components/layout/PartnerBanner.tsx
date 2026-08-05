"use client";

import { motion } from "framer-motion";

export default function PartnerBanner() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-museum-spotlight px-6 py-24 md:min-h-[60vh] md:py-32">
      <div className="absolute inset-0 bg-museum-dark/20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <p className="mb-5 text-[0.65rem] uppercase tracking-[0.35em] text-asilsa-cream/60">
          Partner
        </p>
        <h2 className="font-serif text-3xl font-light leading-snug tracking-wide text-asilsa-cream md:text-5xl">
          Discover Our Inspiration: Asil Melody
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed tracking-wide text-asilsa-cream/75 md:text-base">
          A warm museum of sound — where atmosphere meets artistry beyond the
          living space.
        </p>
        <a
          href="https://asilmelody.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block border border-asilsa-cream/50 px-8 py-3 text-[0.7rem] uppercase tracking-[0.3em] text-asilsa-cream transition-all duration-500 hover:border-asilsa-cream hover:shadow-[0_0_24px_rgba(247,243,238,0.25)]"
        >
          Keşfet / Explore
        </a>
      </motion.div>
    </section>
  );
}

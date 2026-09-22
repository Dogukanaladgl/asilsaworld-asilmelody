"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionLink from "@/components/ui/SectionLink";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=90&w=3200&auto=format&fit=crop&dpr=2";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative -mt-[calc(3.75rem+env(safe-area-inset-top))] bg-asilsa-cream sm:-mt-24 md:-mt-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-[1400px] items-stretch md:min-h-[100svh] md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[min(58svh,28rem)] w-full min-w-0 overflow-hidden sm:h-[min(70svh,40rem)] md:h-auto md:min-h-full md:rounded-br-[clamp(4rem,18vw,12rem)]"
        >
          <Image
            src={HERO_IMAGE}
            alt={`${t.hero.line1} ${t.hero.line2} ${t.hero.line3}`}
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-[center_42%] md:object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-museum-dark/25 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-asilsa-cream/10" />
        </motion.div>

        <div className="relative flex flex-col justify-center px-fluid py-10 pb-14 sm:py-14 md:py-24 lg:pl-16 lg:pr-12">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fade}
            className="text-fluid-caption mb-4 uppercase tracking-[0.18em] text-museum-dark/45 sm:mb-5 sm:tracking-[0.32em]"
          >
            {t.nav.collections}
          </motion.p>

          <motion.h1
            id="hero-heading"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fade}
            className="max-w-full break-words font-serif text-[clamp(1.85rem,1.1rem+4.5vw,4.75rem)] font-light leading-[1.12] tracking-tight text-museum-dark"
          >
            <span className="block">{t.hero.line1}</span>
            <span className="block italic text-asilsa-gold/90">{t.hero.line2}</span>
            <span className="block">{t.hero.line3}</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fade}
            className="text-fluid-body mt-5 max-w-md font-light leading-relaxed tracking-wide text-museum-dark/60 sm:mt-6"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fade}
            className="mt-8 sm:mt-9"
          >
            <SectionLink
              section="spaces"
              className="btn-primary w-full gap-2 sm:w-auto"
            >
              {t.hero.cta}
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </SectionLink>
          </motion.div>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fade}
            className="mt-14 hidden text-fluid-caption uppercase tracking-[0.28em] text-museum-dark/35 md:block"
          >
            {t.hero.scroll}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

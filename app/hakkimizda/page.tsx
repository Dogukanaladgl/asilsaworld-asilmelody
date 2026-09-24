"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionLink from "@/components/ui/SectionLink";

const ABOUT_IMAGE = "/about/kapak.webp";
const ABOUT_WIDTH = 1024;
const ABOUT_HEIGHT = 841;

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.1,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function AboutPage() {
  const { t } = useLanguage();
  const lenis = useLenis();

  useEffect(() => {
    const toTop = () => {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    toTop();
    const t1 = window.setTimeout(toTop, 0);
    const t2 = window.setTimeout(toTop, 120);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [lenis]);

  return (
    <div className="bg-asilsa-cream pb-[calc(6rem+env(safe-area-inset-bottom))] sm:pb-0">
      <section
        aria-labelledby="about-page-heading"
        className="relative overflow-hidden"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-fluid pb-12 pt-6 md:grid-cols-2 md:gap-16 md:pb-20 md:pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-xl"
          >
            <motion.p
              custom={0}
              variants={fade}
              className="text-fluid-caption uppercase tracking-[0.28em] text-museum-dark/45 sm:tracking-[0.32em]"
            >
              {t.about.pageEyebrow}
            </motion.p>
            <motion.h1
              id="about-page-heading"
              custom={1}
              variants={fade}
              className="mt-4 font-serif text-[clamp(1.85rem,1.1rem+3.2vw,3.5rem)] font-light leading-[1.15] tracking-tight text-museum-dark"
            >
              {t.about.pageTitle}
            </motion.h1>
            <motion.span
              custom={2}
              variants={fade}
              className="mt-6 block h-px w-12 bg-asilsa-gold"
            />
            <motion.p
              custom={3}
              variants={fade}
              className="text-fluid-body mt-6 max-w-md font-light leading-relaxed tracking-wide text-museum-dark/60"
            >
              {t.about.pageIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative aspect-[1024/841] w-full overflow-hidden"
          >
            <Image
              src={ABOUT_IMAGE}
              alt={t.about.title}
              width={ABOUT_WIDTH}
              height={ABOUT_HEIGHT}
              priority
              unoptimized
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-asilsa-cream/25 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section
        aria-label={t.about.pageEyebrow}
        className="border-t border-museum-dark/8 bg-asilsa-beige/25"
      >
        <div className="mx-auto max-w-7xl px-fluid py-section">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
            {t.about.pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <span className="font-serif text-[0.7rem] tracking-[0.28em] text-asilsa-gold/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-serif text-[clamp(1.25rem,1rem+1vw,1.65rem)] font-light tracking-wide text-museum-dark">
                  {pillar.title}
                </h2>
                <span className="mt-4 block h-px w-8 bg-asilsa-gold/70" />
                <p className="text-fluid-body mt-5 font-light leading-relaxed tracking-wide text-museum-dark/60">
                  {pillar.text}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-14 flex justify-center sm:mt-16"
          >
            <SectionLink section="spaces" className="btn-primary gap-2">
              {t.hero.cta}
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </SectionLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

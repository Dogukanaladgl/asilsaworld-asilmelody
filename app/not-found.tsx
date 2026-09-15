"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionLink from "@/components/ui/SectionLink";
import BrandMark from "@/components/ui/BrandMark";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section
      data-page="not-found"
      className="flex min-h-svh items-center bg-asilsa-cream px-fluid py-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.14 } },
        }}
        className="mx-auto max-w-xl text-center"
      >
        <motion.div variants={fadeInUp}>
          <Link
            href="/"
            className="inline-block text-museum-dark transition-colors duration-500 hover:text-asilsa-gold"
          >
            <BrandMark size="lg" align="center" />
          </Link>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-12 font-serif text-[clamp(3.5rem,2rem+8vw,7rem)] font-light leading-none tracking-[0.08em] text-asilsa-gold/70"
        >
          {t.notFound.eyebrow}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-6 font-serif text-[clamp(1.5rem,1rem+2.4vw,2.5rem)] font-light leading-snug tracking-wide text-museum-dark"
        >
          {t.notFound.title}
        </motion.h1>

        <motion.span
          variants={fadeInUp}
          className="mx-auto mt-6 block h-px w-12 bg-asilsa-gold"
        />

        <motion.p
          variants={fadeInUp}
          className="text-fluid-body mx-auto mt-6 max-w-md font-light leading-relaxed tracking-wide text-museum-dark/60"
        >
          {t.notFound.text}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="/" className="btn-primary w-full sm:w-auto">
            {t.notFound.home}
          </Link>
          <SectionLink
            section="collections"
            className="btn-gold w-full sm:w-auto"
          >
            {t.notFound.collections}
          </SectionLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

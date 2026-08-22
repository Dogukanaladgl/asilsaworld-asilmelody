"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const spaceImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=900&auto=format&fit=crop",
];

export default function Spaces() {
  const { t } = useLanguage();

  return (
    <section className="bg-asilsa-beige/30 px-fluid py-section">
      <div className="mx-auto mb-10 max-w-7xl text-center md:mb-14">
        <p className="text-fluid-caption uppercase tracking-[0.32em] text-museum-dark/45">
          {t.spaces.eyebrow}
        </p>
        <h2 className="text-fluid-display mt-3 font-serif font-light tracking-wide text-museum-dark">
          {t.spaces.title}
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {t.spaces.items.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
          >
            <Link
              href="/#collections"
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <Image
                src={spaceImages[index]}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-museum-dark/70 via-museum-dark/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-center text-[0.62rem] uppercase leading-snug tracking-[0.14em] text-asilsa-cream sm:p-5 sm:text-[0.65rem] sm:tracking-[0.28em]">
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

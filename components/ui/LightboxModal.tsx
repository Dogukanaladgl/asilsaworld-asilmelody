"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FurnitureItem } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

type LightboxModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: FurnitureItem | null;
};

export default function LightboxModal({
  isOpen,
  onClose,
  item,
}: LightboxModalProps) {
  const { language, t } = useLanguage();

  if (!isOpen || !item) return null;

  const whatsappHref = `https://wa.me/905555555555?text=${encodeURIComponent(
    t.lightbox.message.replace("{title}", item.title),
  )}`;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative grid max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-asilsa-cream md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.lightbox.close}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center text-museum-dark/60 transition-colors hover:text-museum-dark md:text-asilsa-cream/80 md:hover:text-asilsa-cream"
        >
          <span className="text-2xl font-light leading-none">×</span>
        </button>

        <div className="relative min-h-[280px] md:min-h-[520px]">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-asilsa-gold">
            {item.category[language]}
          </p>
          <h3
            id="lightbox-title"
            className="font-serif text-2xl font-light tracking-wide text-museum-dark md:text-3xl"
          >
            {item.title}
          </h3>
          <span className="mt-4 block h-px w-10 bg-asilsa-gold" />
          <p className="mt-6 text-sm font-light leading-relaxed tracking-wide text-museum-dark/70 md:text-base">
            {item.description[language]}
          </p>
          <p className="mt-5 text-[0.6rem] uppercase tracking-[0.25em] text-museum-dark/35">
            {t.lightbox.reference} {item.id}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center justify-center border border-asilsa-gold bg-asilsa-gold/10 px-6 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-museum-dark transition-colors hover:bg-asilsa-gold hover:text-asilsa-cream"
          >
            {t.lightbox.whatsapp}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

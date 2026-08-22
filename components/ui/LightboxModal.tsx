"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FurnitureItem } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getWhatsAppUrl } from "@/lib/contact";

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

  const whatsappHref = getWhatsAppUrl(
    t.lightbox.message.replace("{title}", item.title),
  );

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 backdrop-blur-md sm:items-center sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative grid max-h-[92dvh] w-full max-w-4xl overflow-y-auto overscroll-contain bg-asilsa-cream sm:max-h-[90vh] sm:overflow-hidden sm:rounded-xl md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.lightbox.close}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-asilsa-cream text-museum-dark shadow-md ring-1 ring-museum-dark/10 transition-colors hover:bg-museum-dark hover:text-asilsa-cream"
        >
          <span className="text-2xl font-light leading-none">×</span>
        </button>

        <div className="relative h-56 w-full shrink-0 sm:h-72 md:min-h-[520px]">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-7 pb-safe sm:px-8 sm:py-10 md:px-12 md:py-14">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.3em] text-asilsa-gold sm:mb-3">
            {item.category[language]}
          </p>
          <h3
            id="lightbox-title"
            className="font-serif text-xl font-light tracking-wide text-museum-dark sm:text-2xl md:text-3xl"
          >
            {item.title}
          </h3>
          <span className="mt-3 block h-px w-10 bg-asilsa-gold sm:mt-4" />
          <p className="mt-4 text-sm font-light leading-relaxed tracking-wide text-museum-dark/70 sm:mt-6 md:text-base">
            {item.description[language]}
          </p>
          <p className="mt-4 text-[0.6rem] uppercase tracking-[0.25em] text-museum-dark/35 sm:mt-5">
            {t.lightbox.reference} {item.id}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-7 w-full sm:mt-10 sm:w-fit"
          >
            {t.lightbox.whatsapp}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

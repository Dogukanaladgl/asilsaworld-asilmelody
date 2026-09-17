"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { FurnitureItem } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { buildProductInquiryMessage, getWhatsAppUrl } from "@/lib/contact";

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

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.classList.add("scroll-locked");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isFeatureSheet = item.imageUrl.includes("features");
  const whatsappHref = getWhatsAppUrl(
    buildProductInquiryMessage({
      template: t.lightbox.message,
      title: item.title,
      ref: item.id,
      imageUrl: item.imageUrl,
    }),
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
        className="relative flex max-h-[100svh] w-full max-w-4xl flex-col overflow-hidden bg-asilsa-cream sm:max-h-[90vh] sm:rounded-xl md:grid md:grid-cols-2 md:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.lightbox.close}
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-asilsa-cream/95 text-museum-dark shadow-md ring-1 ring-museum-dark/10 transition-colors hover:bg-museum-dark hover:text-asilsa-cream"
        >
          <span className="text-2xl font-light leading-none">×</span>
        </button>

        <div
          className={`relative h-[min(38svh,16rem)] w-full shrink-0 sm:h-72 md:min-h-[520px] ${
            isFeatureSheet ? "bg-asilsa-cream" : ""
          }`}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            quality={95}
            sizes="(max-width: 768px) 100vw, 60vw"
            className={
              isFeatureSheet ? "object-contain p-3 sm:p-4" : "object-cover"
            }
            priority
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 py-6 pb-safe sm:px-8 sm:py-10 md:justify-center md:px-12 md:py-14">
          <p className="mb-2 text-[0.62rem] uppercase tracking-[0.24em] text-asilsa-gold sm:mb-3 sm:text-[0.65rem] sm:tracking-[0.3em]">
            {item.category[language]}
          </p>
          <h2
            id="lightbox-title"
            className="break-words font-serif text-xl font-light tracking-wide text-museum-dark sm:text-2xl md:text-3xl"
          >
            {item.title}
          </h2>
          <span className="mt-3 block h-px w-10 bg-asilsa-gold sm:mt-4" />
          <p className="mt-4 text-sm font-light leading-relaxed tracking-wide text-museum-dark/70 sm:mt-6 md:text-base">
            {item.description[language]}
          </p>
          <p className="mt-4 text-[0.6rem] uppercase tracking-[0.22em] text-museum-dark/35 sm:mt-5 sm:tracking-[0.25em]">
            {t.lightbox.reference} {item.id}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6 w-full sm:mt-10 sm:w-fit"
          >
            {t.lightbox.whatsapp}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

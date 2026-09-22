"use client";

import { useEffect, useState } from "react";
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
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setPhotoIndex(0);
  }, [item?.id]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!item) return;
      const gallery = item.imageUrls?.length ? item.imageUrls : [item.imageUrl];
      if (gallery.length < 2) return;
      if (e.key === "ArrowRight") {
        setPhotoIndex((i) => (i + 1) % gallery.length);
      }
      if (e.key === "ArrowLeft") {
        setPhotoIndex((i) => (i - 1 + gallery.length) % gallery.length);
      }
    };
    document.body.classList.add("scroll-locked");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, item]);

  if (!isOpen || !item) return null;

  const gallery = item.imageUrls?.length ? item.imageUrls : [item.imageUrl];
  const activeUrl = gallery[Math.min(photoIndex, gallery.length - 1)] ?? item.imageUrl;
  const whatsappHref = getWhatsAppUrl(
    buildProductInquiryMessage({
      template: t.lightbox.message,
      title: item.title,
      ref: item.id,
      imageUrl: activeUrl,
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

        <div className="relative h-[min(40svh,17rem)] w-full shrink-0 bg-museum-dark/5 sm:h-80 md:h-auto md:min-h-full">
          <Image
            key={activeUrl}
            src={activeUrl}
            alt={item.title}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Önceki görsel"
                onClick={() =>
                  setPhotoIndex(
                    (i) => (i - 1 + gallery.length) % gallery.length,
                  )
                }
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-asilsa-cream/90 text-museum-dark shadow ring-1 ring-museum-dark/10"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Sonraki görsel"
                onClick={() =>
                  setPhotoIndex((i) => (i + 1) % gallery.length)
                }
                className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-asilsa-cream/90 text-museum-dark shadow ring-1 ring-museum-dark/10"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {gallery.map((url, i) => (
                  <button
                    key={url}
                    type="button"
                    aria-label={`Görsel ${i + 1}`}
                    onClick={() => setPhotoIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === photoIndex
                        ? "w-5 bg-asilsa-gold"
                        : "w-1.5 bg-asilsa-cream/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
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
          {gallery.length > 1 && (
            <p className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] text-museum-dark/40">
              {photoIndex + 1} / {gallery.length}
            </p>
          )}
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

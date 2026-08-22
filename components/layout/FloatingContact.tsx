"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { brand, getWhatsAppUrl } from "@/lib/contact";

const inputClass =
  "w-full border-0 border-b border-museum-dark/20 bg-transparent py-2.5 text-sm font-light tracking-wide text-museum-dark outline-none transition-colors placeholder:text-museum-dark/35 focus:border-asilsa-gold";

export default function FloatingContact() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.classList.add("scroll-locked");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = t.contactPanel.whatsappBody
      .replace("{name}", name)
      .replace("{email}", email)
      .replace("{message}", message);

    window.open(getWhatsAppUrl(body), "_blank", "noopener,noreferrer");
    setIsOpen(false);
    e.currentTarget.reset();
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[55] flex flex-col items-end justify-end sm:inset-x-auto sm:bottom-8 sm:right-8 sm:items-end">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label={t.contactPanel.close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-auto absolute inset-0 h-[100dvh] w-full bg-black/35 sm:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-panel-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto relative z-10 mb-0 w-full max-h-[85dvh] overflow-y-auto overscroll-contain border-t border-asilsa-beige/80 bg-asilsa-cream shadow-[0_-12px_40px_rgba(44,36,28,0.15)] sm:mb-3 sm:w-[22rem] sm:max-h-[min(85dvh,34rem)] sm:border sm:shadow-[0_20px_60px_rgba(44,36,28,0.18)]"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-asilsa-beige/70 bg-museum-dark px-5 py-3.5">
                <h2
                  id="contact-panel-title"
                  className="font-serif text-sm font-light tracking-[0.08em] text-asilsa-cream"
                >
                  {brand.name}
                </h2>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label={t.contactPanel.close}
                  className="flex h-9 w-9 items-center justify-center text-asilsa-cream/70 transition-colors hover:text-asilsa-cream"
                >
                  <span className="text-xl font-light leading-none">×</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-5 pb-safe pt-4 sm:pb-5">
                <p className="mb-5 border-l border-asilsa-gold pl-3 text-sm font-light leading-relaxed tracking-wide text-museum-dark/70 sm:mb-6">
                  {t.contactPanel.greeting}
                </p>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      {t.contactPanel.name}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder={`${t.contactPanel.name}*`}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      {t.contactPanel.email}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder={`${t.contactPanel.email}*`}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      {t.contactPanel.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={3}
                      placeholder={`${t.contactPanel.message}*`}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-6 w-full sm:mt-7"
                >
                  {t.contactPanel.send}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={t.common.contactUs}
        aria-expanded={isOpen}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        className="pointer-events-auto relative z-20 m-4 flex h-12 w-12 items-center justify-center rounded-full bg-museum-dark text-asilsa-cream shadow-[0_8px_30px_rgba(44,36,28,0.25)] transition-all duration-500 hover:bg-asilsa-gold hover:text-museum-dark sm:m-0 sm:h-14 sm:w-14"
      >
        {isOpen ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-5 w-5 sm:h-6 sm:w-6"
            aria-hidden
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-5 w-5 transition-transform duration-500 group-hover:scale-105 sm:h-6 sm:w-6"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 16.5 5 19V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6.5A2.5 2.5 0 0 1 16.5 16.5H7.5Z"
            />
          </svg>
        )}
      </motion.button>
    </div>
  );
}

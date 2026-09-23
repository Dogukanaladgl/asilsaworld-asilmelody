"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import BrandMark from "@/components/ui/BrandMark";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

const inputClass =
  "w-full border-0 border-b border-museum-dark/20 bg-transparent py-2.5 text-base font-light tracking-wide text-museum-dark outline-none transition-colors placeholder:text-museum-dark/35 focus:border-asilsa-gold sm:text-sm";

type Status = "idle" | "sending" | "success" | "error";

export default function FloatingContact() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    lockBodyScroll();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex items-end justify-end sm:items-end sm:justify-end sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              aria-label={t.contactPanel.close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 sm:bg-black/25"
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
              className="relative z-10 flex max-h-[min(92dvh,calc(100svh-0.5rem))] w-full flex-col overflow-hidden rounded-t-2xl border-t border-asilsa-beige/80 bg-asilsa-cream shadow-[0_-12px_40px_rgba(44,36,28,0.15)] sm:mb-16 sm:max-h-[min(85dvh,34rem)] sm:w-[22rem] sm:rounded-none sm:border sm:shadow-[0_20px_60px_rgba(44,36,28,0.18)]"
            >
              <div className="flex shrink-0 items-center justify-between border-b border-asilsa-beige/70 bg-museum-dark px-5 py-3.5">
                <p
                  id="contact-panel-title"
                  className="text-asilsa-cream"
                >
                  <BrandMark size="sm" showMark={false} />
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label={t.contactPanel.close}
                  className="flex h-11 w-11 items-center justify-center text-asilsa-cream/70 transition-colors hover:text-asilsa-cream"
                >
                  <span className="text-2xl font-light leading-none">×</span>
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="overflow-y-auto overscroll-contain px-5 pb-safe pt-4 sm:pb-5"
              >
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
                  disabled={status === "sending"}
                  className="btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-70 sm:mt-7"
                >
                  {status === "sending"
                    ? t.contactPanel.sending
                    : t.contactPanel.send}
                </button>
                {status === "success" && (
                  <p className="mt-3 text-center text-xs font-light text-museum-dark/70">
                    {t.contactPanel.success}
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-center text-xs font-light text-red-800/80">
                    {t.contactPanel.error}
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => {
          setIsOpen((open) => !open);
          setStatus("idle");
        }}
        aria-label={t.common.contactUs}
        aria-expanded={isOpen}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        className={`fab-inset pointer-events-auto fixed z-[56] flex h-12 w-12 items-center justify-center rounded-full bg-museum-dark text-asilsa-cream shadow-[0_8px_30px_rgba(44,36,28,0.25)] transition-opacity duration-300 hover:bg-asilsa-gold hover:text-museum-dark sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 ${
          isOpen ? "max-sm:pointer-events-none max-sm:opacity-0" : ""
        }`}
        tabIndex={isOpen ? -1 : 0}
      >
        {isOpen ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="hidden h-5 w-5 sm:block sm:h-6 sm:w-6"
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
            className="h-5 w-5 sm:h-6 sm:w-6"
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
    </>
  );
}

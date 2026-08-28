"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { languages } from "@/lib/i18n";

export default function LanguageToggle({
  className = "",
  variant = "menu",
}: {
  className?: string;
  variant?: "menu" | "inline";
}) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
        {languages.map((item) => (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            aria-current={language === item.code ? "true" : undefined}
            className={`min-h-11 min-w-[3.5rem] px-3 text-sm font-light tracking-[0.2em] transition-colors ${
              language === item.code
                ? "text-asilsa-gold"
                : "text-gray-800/45 active:text-asilsa-gold"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  const current = languages.find((item) => item.code === language) ?? languages[0];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={t.common.switchLanguage}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex min-h-11 items-center gap-1.5 px-1 text-sm font-light tracking-[0.2em] text-museum-dark transition-colors hover:text-asilsa-gold"
      >
        <span className="text-asilsa-gold">{current.label}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={`h-3.5 w-3.5 text-gray-800/50 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full z-50 mt-2 min-w-[9rem] border border-asilsa-beige/70 bg-asilsa-cream py-1 shadow-[0_18px_40px_rgba(44,36,28,0.14)]"
          >
            {languages.map((item) => (
              <li key={item.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={language === item.code}
                  onClick={() => {
                    setLanguage(item.code);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-xs font-light tracking-[0.12em] transition-colors hover:bg-asilsa-beige/40 ${
                    language === item.code
                      ? "text-asilsa-gold"
                      : "text-museum-dark/70"
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-[0.65rem] tracking-[0.2em] opacity-60">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.common.switchLanguage}
      className={`text-sm font-light tracking-[0.2em] transition-colors ${className}`}
    >
      <span
        className={
          language === "tr" ? "text-asilsa-gold" : "text-gray-800/45"
        }
      >
        TR
      </span>
      <span className="mx-1.5 text-gray-800/35">/</span>
      <span
        className={
          language === "en" ? "text-asilsa-gold" : "text-gray-800/45"
        }
      >
        EN
      </span>
    </button>
  );
}

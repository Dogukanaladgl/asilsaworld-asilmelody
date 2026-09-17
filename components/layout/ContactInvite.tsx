"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getWhatsAppUrl } from "@/lib/contact";

export default function ContactInvite() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-asilsa-cream px-fluid pb-16 pt-12 md:pb-20 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(196,165,116,0.18)_0%,rgba(232,223,211,0.45)_42%,rgba(247,243,238,0)_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-asilsa-cream to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-asilsa-cream to-transparent"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 block h-px w-24 bg-asilsa-gold/80 sm:w-32" />
        <h2 className="font-serif text-3xl font-light tracking-wide text-museum-dark md:text-4xl">
          {t.footer.inviteTitle}
        </h2>
        <p className="mt-4 max-w-md text-sm font-light leading-relaxed tracking-wide text-museum-dark/60">
          {t.footer.inviteText}
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-9 w-full sm:w-auto"
        >
          {t.footer.inviteCta}
        </a>
      </div>
    </div>
  );
}

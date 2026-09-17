"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getWhatsAppUrl } from "@/lib/contact";

export default function ContactInvite() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-asilsa-cream px-fluid pb-14 pt-10 sm:pb-16 sm:pt-12 md:pb-20 md:pt-16">
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

      <section
        aria-labelledby="contact-invite-heading"
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <span className="mb-5 block h-px w-20 bg-asilsa-gold/80 sm:mb-6 sm:w-32" />
        <h2
          id="contact-invite-heading"
          className="font-serif text-[clamp(1.5rem,1.15rem+2vw,2.25rem)] font-light tracking-wide text-museum-dark"
        >
          {t.footer.inviteTitle}
        </h2>
        <p className="mt-3 max-w-md text-sm font-light leading-relaxed tracking-wide text-museum-dark/60 sm:mt-4">
          {t.footer.inviteText}
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-7 w-full sm:mt-9 sm:w-auto"
        >
          {t.footer.inviteCta}
        </a>
      </section>
    </div>
  );
}

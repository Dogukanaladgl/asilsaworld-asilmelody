"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SocialIcons from "@/components/ui/SocialIcons";
import { brand, contact, getWhatsAppUrl, getMapsUrl } from "@/lib/contact";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-0">
      <div className="bg-museum-dark px-fluid py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-light tracking-wide text-asilsa-cream md:text-4xl">
              {t.footer.inviteTitle}
            </h2>
            <p className="mt-4 text-sm font-light tracking-wide text-asilsa-cream/65">
              {t.footer.inviteText}
            </p>
            <SocialIcons variant="onDark" className="mt-8" />
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-light w-full md:w-auto"
          >
            {t.footer.inviteCta}
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200/50 bg-asilsa-cream">
        <div className="mx-auto grid max-w-7xl gap-fluid px-fluid py-section md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="font-serif text-sm font-light tracking-[0.08em] text-museum-dark"
            >
              {brand.name}
            </Link>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed tracking-wide text-museum-dark/60">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-museum-dark/50">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-5 space-y-1">
              <li>
                <Link
                  href="/#collections"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {t.nav.collections}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {t.nav.careers}
                </Link>
              </li>
              <li>
                <a
                  href="https://asilmelody.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {t.nav.asilMelody}
                </a>
              </li>
            </ul>
          </div>

          <div
            id="contact"
            className="scroll-mt-[calc(5rem+env(safe-area-inset-top))] md:scroll-mt-32"
          >
            <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-museum-dark/50">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-1">
              <li>
                <a
                  href={getMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {contact.addressShort}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
            <SocialIcons variant="onLight" className="mt-6" />
          </div>
        </div>

        <div className="border-t border-gray-200/40 px-fluid py-5 sm:py-6">
          <p className="text-center text-[0.65rem] font-light tracking-[0.15em] text-museum-dark/45">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

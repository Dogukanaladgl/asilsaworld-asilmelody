"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SocialIcons from "@/components/ui/SocialIcons";
import SectionLink from "@/components/ui/SectionLink";
import BrandMark from "@/components/ui/BrandMark";
import { contact, getMapsUrl } from "@/lib/contact";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-0">
      <div className="border-t border-gray-200/50 bg-asilsa-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-fluid py-section sm:gap-fluid md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block text-museum-dark">
              <BrandMark size="sm" />
            </Link>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed tracking-wide text-museum-dark/60 sm:mt-5">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-[0.68rem] uppercase tracking-[0.24em] text-museum-dark/75 sm:text-[0.72rem] sm:tracking-[0.28em]">
              {t.footer.quickLinks}
            </h2>
            <ul className="mt-3 space-y-0.5 sm:mt-5 sm:space-y-1">
              <li>
                <SectionLink
                  section="spaces"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {t.nav.collections}
                </SectionLink>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {t.nav.about}
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
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href="https://asilmelody.ddogukan.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {t.nav.asilMelody}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.68rem] uppercase tracking-[0.24em] text-museum-dark/75 sm:text-[0.72rem] sm:tracking-[0.28em]">
              {t.footer.contact}
            </h2>
            <ul className="mt-3 space-y-0.5 sm:mt-5 sm:space-y-1">
              <li>
                <a
                  href={getMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center break-words text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
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
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-11 items-center text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/40 px-fluid py-6 sm:py-7">
          <SocialIcons variant="onLight" className="mb-5" />
          <p className="text-center text-[0.65rem] font-light tracking-[0.15em] text-museum-dark/45">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

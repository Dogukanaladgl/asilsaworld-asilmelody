"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  contact,
  getAppleMapsUrl,
  getMapsEmbedUrl,
  getMapsUrl,
} from "@/lib/contact";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="scroll-mt-[calc(5rem+env(safe-area-inset-top))] border-t border-gray-200/40 bg-asilsa-cream px-fluid py-section md:scroll-mt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <p className="text-fluid-caption uppercase tracking-[0.28em] text-museum-dark/45 sm:tracking-[0.35em]">
            {t.location.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.35rem,0.9rem+2.2vw,2.15rem)] font-light leading-snug tracking-wide text-museum-dark sm:mt-4">
            {t.location.title}
          </h2>
          <span className="mt-4 block h-px w-10 bg-asilsa-gold sm:mt-5 sm:w-12" />
          <p className="mt-5 text-sm font-medium leading-relaxed tracking-wide text-museum-dark sm:mt-7 md:text-base">
            {t.location.invite}
          </p>
          <p className="text-fluid-body mt-3 font-light leading-relaxed tracking-wide text-museum-dark/60">
            {t.location.note}
          </p>

          <div className="mt-7 space-y-1 border-t border-asilsa-beige/70 pt-5 sm:mt-8 sm:pt-6">
            <p className="text-sm font-light tracking-wide text-museum-dark">
              <a
                href={contact.phoneHref}
                className="transition-colors hover:text-asilsa-gold"
              >
                {contact.phoneDisplay}
              </a>
            </p>
            <p className="text-sm font-medium text-museum-dark">
              {t.location.hoursLabel}
            </p>
            <p className="text-sm font-light text-museum-dark/55">
              {t.location.hoursToday} {contact.hoursDisplay}
            </p>
          </div>

          <address className="text-fluid-body mt-5 space-y-1 font-light not-italic leading-relaxed tracking-wide text-museum-dark/65 sm:mt-6">
            {contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>

          <div className="mt-7 flex flex-col gap-2.5 sm:mt-10">
            <a
              href={getAppleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full gap-2 whitespace-nowrap px-4 py-2.5 text-[0.6rem] tracking-[0.12em] sm:px-4 sm:text-[0.65rem] sm:tracking-[0.16em]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-hidden
              >
                <path d="M16.4 12.6c0-2 1.6-2.9 1.7-3-.9-1.4-2.4-1.5-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.5 2 1-.1 1.4-.6 2.6-.6s1.5.6 2.6.6c1.1 0 1.8-1 2.4-2 .8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.1ZM14.6 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.8 2.5.9.1 1.8-.4 2.4-1.1Z" />
              </svg>
              {t.location.directionsApple}
            </a>
            <a
              href={getMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full gap-2 whitespace-nowrap px-4 py-2.5 text-[0.6rem] tracking-[0.12em] sm:px-4 sm:text-[0.65rem] sm:tracking-[0.16em]"
            >
              <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0" aria-hidden>
                <path
                  fill="#4285F4"
                  d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17Z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46Z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7Z"
                />
                <path
                  fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07Z"
                />
              </svg>
              {t.location.directionsGoogle}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-asilsa-beige/60 sm:aspect-[16/10] md:aspect-auto md:h-[min(48vw,520px)] md:min-h-[360px]"
        >
          <iframe
            title={t.location.mapTitle}
            src={getMapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SocialIcons from "@/components/ui/SocialIcons";
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

          <SocialIcons variant="onLight" className="mt-6" />

          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href={getAppleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full gap-2 sm:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
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
              className="btn-gold w-full gap-2 sm:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M12 2.2c-3.6 0-6.5 2.9-6.5 6.5 0 4.8 6.5 12.9 6.5 12.9s6.5-8.1 6.5-12.9c0-3.6-2.9-6.5-6.5-6.5Zm0 9a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z" />
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

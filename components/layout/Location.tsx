"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SocialIcons from "@/components/ui/SocialIcons";
import { contact, getMapsEmbedUrl, getMapsUrl } from "@/lib/contact";

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

          <a
            href={getMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7 w-full sm:mt-10 sm:w-auto"
          >
            {t.location.directions}
          </a>
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

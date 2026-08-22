"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

function FeatureIcon({ index }: { index: number }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    className: "mx-auto h-7 w-7 text-asilsa-gold lg:mx-0",
    "aria-hidden": true as const,
  };

  if (index === 0) {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v3m0 10v3M4 12h3m10 0h3M7.05 7.05l2.12 2.12m5.66 5.66 2.12 2.12m0-9.9-2.12 2.12M9.17 14.83 7.05 16.95"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19V5h10l6 7-6 7H4Z"
        />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10.5 12 4l9 6.5V20H3V10.5Zm6 9.5v-6h6v6"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 16.5 5 19V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6.5A2.5 2.5 0 0 1 16.5 16.5H7.5Z"
      />
    </svg>
  );
}

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-gray-200/40 bg-asilsa-cream px-fluid py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {t.features.items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="text-center lg:text-left"
          >
            <FeatureIcon index={index} />
            <h3 className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-museum-dark">
              {item.title}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed tracking-wide text-museum-dark/55">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

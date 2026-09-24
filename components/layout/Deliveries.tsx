"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  fallbackDeliveryPosts,
  instagramHandle,
  instagramUrl,
  type DeliveryPost,
} from "@/lib/deliveries";

/** Continuous marquee speed (px / second). */
const SCROLL_SPEED = 32;
const BRAND_AVATAR = "/brand/logo.webp";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="12"
        cy="12"
        r="2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="15.7" cy="8.3" r="0.85" fill="currentColor" />
    </svg>
  );
}

function ActionIcons() {
  return (
    <div className="flex items-center justify-between px-3.5 py-3">
      <div className="flex items-center gap-3.5 text-museum-dark/70">
        <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem] text-[#ed4956]" aria-hidden>
          <path
            d="M12 20.2 4.8 13.4a4.6 4.6 0 0 1 6.5-6.5l.7.7.7-.7a4.6 4.6 0 0 1 6.5 6.5L12 20.2Z"
            fill="currentColor"
          />
        </svg>
        <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" aria-hidden>
          <path
            d="M5.5 18.5 7 16.2A7 7 0 1 1 12 19a7.1 7.1 0 0 1-3.2-.8L5.5 18.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" aria-hidden>
          <path
            d="M5 6.5h4.2L19 12 9.2 17.5H5l4-5.5L5 6.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <svg
        viewBox="0 0 24 24"
        className="h-[1.15rem] w-[1.15rem] text-museum-dark/70"
        aria-hidden
      >
        <path
          d="M7 5.5h10v14.2l-5-3.2-5 3.2V5.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function DeliveryCard({ post }: { post: DeliveryPost }) {
  const { t } = useLanguage();
  const href = post.href || instagramUrl;
  const remote = /^https?:\/\//i.test(post.image);

  return (
    <a
      data-delivery-card
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-[min(78vw,17.5rem)] shrink-0 flex-col overflow-hidden rounded-2xl border border-museum-dark/10 bg-white shadow-[0_1px_0_rgba(28,25,23,0.04)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:border-museum-dark/18 hover:shadow-[0_12px_32px_-18px_rgba(28,25,23,0.28)] sm:w-[17.5rem]"
      aria-label={`${post.alt} — ${t.deliveries.openPost}`}
    >
      <div className="flex items-center gap-2.5 px-3.5 py-3">
        <span
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(from_210deg,#f58529,#dd2a7b,#8134af,#515bd4,#f58529)] p-[1.5px]"
          aria-hidden
        >
          <span className="relative h-full w-full overflow-hidden rounded-full bg-museum-dark">
            <Image
              src={BRAND_AVATAR}
              alt=""
              fill
              sizes="36px"
              className="object-cover object-center"
            />
          </span>
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.8rem] font-medium tracking-wide text-museum-dark">
            {instagramHandle.replace(/^@/, "")}
          </p>
          <p className="truncate text-[0.65rem] font-light tracking-wide text-museum-dark/40">
            Instagram
          </p>
        </div>
        <InstagramGlyph className="h-4 w-4 shrink-0 text-museum-dark/35 transition-colors duration-300 group-hover:text-asilsa-gold" />
      </div>

      <div className="relative aspect-square overflow-hidden bg-asilsa-beige/40">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          unoptimized={remote}
          quality={100}
          sizes="280px"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <ActionIcons />
    </a>
  );
}

export default function Deliveries({
  posts = fallbackDeliveryPosts,
}: {
  posts?: DeliveryPost[];
}) {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const items = posts.length > 0 ? posts : fallbackDeliveryPosts;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.064, (now - last) / 1000);
      last = now;

      if (!pausedRef.current) {
        const loopWidth = track.scrollWidth / 2;
        if (loopWidth > 1) {
          offsetRef.current += SCROLL_SPEED * dt;
          if (offsetRef.current >= loopWidth) {
            offsetRef.current -= loopWidth;
          }
          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [items.length]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <section
      id="deliveries"
      aria-labelledby="deliveries-heading"
      className="scroll-mt-[calc(5rem+env(safe-area-inset-top))] border-t border-museum-dark/8 bg-asilsa-cream py-section md:scroll-mt-32"
    >
      <div className="mx-auto mb-8 max-w-7xl px-fluid text-center sm:mb-10 md:mb-12">
        <p className="text-fluid-caption uppercase tracking-[0.28em] text-museum-dark/45 sm:tracking-[0.32em]">
          {t.deliveries.eyebrow}
        </p>
        <h2
          id="deliveries-heading"
          className="text-fluid-display mt-3 font-serif font-light tracking-wide text-museum-dark"
        >
          {t.deliveries.title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm font-light leading-relaxed tracking-wide text-museum-dark/50 sm:mt-4">
          {t.deliveries.subtitle}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            resume();
          }
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-4 will-change-transform sm:gap-5"
          aria-label={t.deliveries.title}
        >
          {items.map((post) => (
            <DeliveryCard key={post.id} post={post} />
          ))}
          {/* Duplicate set for seamless loop */}
          {items.map((post) => (
            <DeliveryCard key={`${post.id}-loop`} post={post} />
          ))}
        </div>
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center gap-3 px-fluid text-center sm:mt-12">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary gap-2"
        >
          {t.deliveries.cta}
          <span aria-hidden className="text-base leading-none">
            →
          </span>
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fluid-caption uppercase tracking-[0.22em] text-museum-dark/45 transition-colors hover:text-asilsa-gold"
        >
          {instagramHandle}
        </a>
      </div>
    </section>
  );
}

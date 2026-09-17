"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  clearHomeScrollRestore,
  clearUrlHash,
  consumeHomeScrollRestore,
  consumeSectionScroll,
  prefersReducedMotion,
  scrollToSection,
  type SectionId,
} from "@/lib/scroll";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function wantsHomeSectionScroll() {
  if (typeof window === "undefined") return false;
  const pending = window.sessionStorage.getItem("asilsa-scroll-to");
  if (pending) return true;
  const hash = window.location.hash.replace("#", "");
  return hash === "spaces" || hash === "collections";
}

/** Drive scroll through Lenis only when present — never dual-write native scroll. */
function jumpTo(y: number, lenis: { scrollTo: Function } | null | undefined) {
  if (lenis) {
    lenis.scrollTo(y, { immediate: true });
    return;
  }
  window.scrollTo({ top: y, left: 0, behavior: "auto" });
}

function SectionScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  const prevPathRef = useRef(pathname);
  const restoreYRef = useRef<number | null>(null);
  const restoreDoneRef = useRef(false);

  lenisRef.current = lenis;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Capture restore target once when entering home.
  useEffect(() => {
    const prev = prevPathRef.current;
    prevPathRef.current = pathname;

    if (pathname === "/") {
      restoreYRef.current = consumeHomeScrollRestore();
      restoreDoneRef.current = false;
      return;
    }

    restoreYRef.current = null;
    restoreDoneRef.current = false;

    if (prev === "/" && !pathname.startsWith("/koleksiyon")) {
      clearHomeScrollRestore();
    }
  }, [pathname]);

  // Reset or restore scroll — one authority, no retry storm.
  useEffect(() => {
    if (pathname === "/" && wantsHomeSectionScroll()) return;

    let frame = 0;
    let settleTimer = 0;
    let cancelled = false;

    const apply = (y: number) => {
      if (cancelled) return;
      jumpTo(y, lenisRef.current);
    };

    if (pathname === "/" && restoreYRef.current != null && !restoreDoneRef.current) {
      const y = restoreYRef.current;

      // Wait one frame so home DOM is mounted, then jump once.
      frame = window.requestAnimationFrame(() => {
        apply(y);
        // One settle pass after layout (images/fonts) — not a bounce loop.
        settleTimer = window.setTimeout(() => {
          apply(y);
          restoreDoneRef.current = true;
          restoreYRef.current = null;
        }, 80);
      });

      return () => {
        cancelled = true;
        window.cancelAnimationFrame(frame);
        window.clearTimeout(settleTimer);
      };
    }

    // Default: top of page (other routes, or home without restore).
    apply(0);
    frame = window.requestAnimationFrame(() => apply(0));

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // If Lenis attaches after restore started, sync once without fighting native scroll.
  useEffect(() => {
    if (!lenis) return;
    if (pathname !== "/") return;
    if (restoreDoneRef.current) return;
    if (restoreYRef.current == null) return;

    const y = restoreYRef.current;
    jumpTo(y, lenis);
  }, [lenis, pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const fromHash = window.location.hash.replace("#", "");
    const pending = consumeSectionScroll();
    const normalizedHash =
      fromHash === "collections" ? "spaces" : fromHash;

    if (normalizedHash === "contact" || normalizedHash === "location") {
      clearUrlHash();
      window.location.assign("/iletisim");
      return;
    }

    const target =
      pending ??
      (normalizedHash === "spaces" ? ("spaces" as SectionId) : null);

    if (!target) {
      clearUrlHash();
      return;
    }

    restoreYRef.current = null;
    restoreDoneRef.current = true;

    const immediate = prefersReducedMotion();
    const run = () => scrollToSection(target, lenisRef.current, { immediate });
    const id = window.requestAnimationFrame(() => {
      window.setTimeout(run, immediate ? 0 : 40);
    });

    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

export default function SmoothScrolling({
  children,
}: {
  children: ReactNode;
}) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(ScrollTrigger.update);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          lerp: reducedMotion ? 1 : 0.05,
          wheelMultiplier: 1,
          smoothWheel: !reducedMotion,
          syncTouch: false,
        }}
      >
        <SectionScrollHandler />
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}

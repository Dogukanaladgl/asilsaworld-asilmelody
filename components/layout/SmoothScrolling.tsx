"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  clearHomeScrollRestore,
  clearUrlHash,
  consumeSectionScroll,
  getWindowScrollY,
  isCollectionPath,
  peekHomeScrollRestore,
  prefersReducedMotion,
  rememberHomeScroll,
  scrollToSection,
  type SectionId,
} from "@/lib/scroll";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

type LenisLike = {
  scroll?: number;
  resize: () => void;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { immediate?: boolean; force?: boolean },
  ) => void;
};

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

/** Keep native + Lenis on the same Y in one shot. */
function jumpTo(y: number, lenis: LenisLike | null | undefined) {
  const top = Math.max(0, Math.round(y));
  if (lenis) {
    // Lenis still holds the previous route's height; without a re-measure it
    // clamps Y and snaps back to that stale value on the next wheel tick.
    lenis.resize();
    lenis.scrollTo(top, { immediate: true, force: true });
  }
  window.scrollTo(0, top);
  document.documentElement.scrollTop = top;
}

function collectionHrefFromEventTarget(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) return null;
  const anchor = target.closest("a[href]");
  if (!(anchor instanceof HTMLAnchorElement)) return null;
  try {
    const url = new URL(anchor.href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    return isCollectionPath(url.pathname) ? url.pathname : null;
  } catch {
    return null;
  }
}

function SectionScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis() as LenisLike | undefined;
  const lenisRef = useRef(lenis);
  /** null = first run; avoids treating Strict Mode re-run as a new navigation. */
  const prevPathRef = useRef<string | null>(null);
  const restoreYRef = useRef<number | null>(null);
  const restoredThisVisitRef = useRef(false);

  lenisRef.current = lenis;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const capture = (event: Event) => {
      if (window.location.pathname !== "/") return;
      if (!collectionHrefFromEventTarget(event.target)) return;
      rememberHomeScroll(getWindowScrollY(lenisRef.current));
    };

    document.addEventListener("pointerdown", capture, true);
    document.addEventListener("click", capture, true);
    return () => {
      document.removeEventListener("pointerdown", capture, true);
      document.removeEventListener("click", capture, true);
    };
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const y = peekHomeScrollRestore();
      if (y == null) return;
      if (isCollectionPath(window.location.pathname)) return;
      jumpTo(y, lenisRef.current);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useLayoutEffect(() => {
    const prev = prevPathRef.current;
    prevPathRef.current = pathname;

    if (pathname === "/") {
      // Arm restore only when entering home (not on Strict Mode effect re-run).
      if (prev !== "/") {
        restoreYRef.current = peekHomeScrollRestore();
        restoredThisVisitRef.current = false;
      }
      return;
    }

    if (prev === "/" && !isCollectionPath(pathname)) {
      clearHomeScrollRestore();
    }
    restoreYRef.current = null;
    restoredThisVisitRef.current = false;
  }, [pathname]);

  useLayoutEffect(() => {
    let cancelled = false;
    let frame1 = 0;
    let frame2 = 0;
    let clearTimer = 0;

    if (pathname === "/" && restoreYRef.current != null) {
      const y = restoreYRef.current;

      jumpTo(y, lenisRef.current);

      frame1 = window.requestAnimationFrame(() => {
        if (cancelled) return;
        jumpTo(y, lenisRef.current);
        frame2 = window.requestAnimationFrame(() => {
          if (cancelled) return;
          jumpTo(y, lenisRef.current);
          restoredThisVisitRef.current = true;
          clearUrlHash();
          ScrollTrigger.refresh();
          // Defer clear so Strict Mode remount can still peek the same Y.
          clearTimer = window.setTimeout(() => {
            clearHomeScrollRestore();
          }, 400);
        });
      });

      return () => {
        cancelled = true;
        window.cancelAnimationFrame(frame1);
        window.cancelAnimationFrame(frame2);
        window.clearTimeout(clearTimer);
      };
    }

    if (pathname === "/" && wantsHomeSectionScroll()) return;
    if (pathname === "/" && restoredThisVisitRef.current) return;

    jumpTo(0, lenisRef.current);
    frame1 = window.requestAnimationFrame(() => {
      if (cancelled) return;
      jumpTo(0, lenisRef.current);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame1);
    };
  }, [pathname]);

  useLayoutEffect(() => {
    if (!lenis) return;
    if (pathname !== "/") return;
    if (restoreYRef.current == null) return;
    if (restoredThisVisitRef.current) return;
    jumpTo(restoreYRef.current, lenis);
  }, [lenis, pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    if (restoreYRef.current != null && !restoredThisVisitRef.current) {
      clearUrlHash();
      return;
    }

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

    clearHomeScrollRestore();
    restoreYRef.current = null;

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
          lerp: reducedMotion ? 1 : 0.08,
          wheelMultiplier: 1,
          smoothWheel: !reducedMotion,
          syncTouch: false,
          stopInertiaOnNavigate: true,
        }}
      >
        <SectionScrollHandler />
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}

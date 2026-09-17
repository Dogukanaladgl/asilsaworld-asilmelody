"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  clearUrlHash,
  consumeSectionScroll,
  scrollToSection,
  type SectionId,
} from "@/lib/scroll";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

function SectionScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  // Reset scroll on every route change (Lenis otherwise keeps the previous offset).
  useEffect(() => {
    const pending = (() => {
      if (typeof window === "undefined") return null;
      return window.sessionStorage.getItem("asilsa-scroll-to");
    })();

    // Home + pending section scroll: SectionScrollHandler below will jump to the section.
    if (pathname === "/" && pending) return;

    const run = () => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    const frame = window.requestAnimationFrame(run);
    const retry = window.setTimeout(run, 80);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(retry);
    };
  }, [pathname, lenis]);

  useEffect(() => {
    if (pathname !== "/") return;

    const fromHash = window.location.hash.replace("#", "");
    const pending = consumeSectionScroll();
    const normalizedHash =
      fromHash === "collections" ? "spaces" : fromHash;

    // Old contact/location hashes now live on /iletisim
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

    const run = () => scrollToSection(target, lenis);
    // Wait a frame so the home sections are in the DOM after navigation.
    const id = window.requestAnimationFrame(() => {
      window.setTimeout(run, 40);
    });

    return () => window.cancelAnimationFrame(id);
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScrolling({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    // Keeps ScrollTrigger accurate while Lenis animates the window scroll position.
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(ScrollTrigger.update);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 1,
        smoothWheel: true,
      }}
    >
      <SectionScrollHandler />
      {children}
    </ReactLenis>
  );
}

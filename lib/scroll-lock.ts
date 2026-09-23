/**
 * Lock page scroll without horizontal layout jump.
 * Lenis' default `.lenis-stopped { overflow: clip }` hides the scrollbar —
 * we stop Lenis and rely on `scrollbar-gutter: stable` + overflow:hidden override.
 */

import { getLenis } from "@/lib/lenis-registry";

let lockCount = 0;
let savedY = 0;
let removeGuards: (() => void) | null = null;

function allowScrollTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest("[data-scroll-lock-allow]"));
}

function installScrollGuards() {
  const onWheel = (e: WheelEvent) => {
    if (allowScrollTarget(e.target)) return;
    e.preventDefault();
  };
  const onTouchMove = (e: TouchEvent) => {
    if (allowScrollTarget(e.target)) return;
    e.preventDefault();
  };
  document.addEventListener("wheel", onWheel, { passive: false });
  document.addEventListener("touchmove", onTouchMove, { passive: false });
  removeGuards = () => {
    document.removeEventListener("wheel", onWheel);
    document.removeEventListener("touchmove", onTouchMove);
    removeGuards = null;
  };
}

export function lockBodyScroll() {
  if (typeof document === "undefined") return;
  lockCount += 1;
  if (lockCount > 1) return;

  const lenis = getLenis();
  savedY =
    typeof lenis?.scroll === "number" ? lenis.scroll : window.scrollY;

  document.documentElement.classList.add("scroll-locked");
  document.body.classList.add("scroll-locked");
  lenis?.stop();
  installScrollGuards();
}

export function unlockBodyScroll() {
  if (typeof document === "undefined") return;
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0) return;

  removeGuards?.();

  const lenis = getLenis();
  document.documentElement.classList.remove("scroll-locked");
  document.body.classList.remove("scroll-locked");

  if (lenis) {
    lenis.start();
    lenis.scrollTo(savedY, { immediate: true, force: true });
  } else {
    window.scrollTo(0, savedY);
  }
}

export const SECTION_SCROLL_KEY = "asilsa-scroll-to";
export const HOME_SCROLL_KEY = "asilsa-home-scroll";
export const HOME_SCROLL_RESTORE_KEY = "asilsa-home-scroll-restore";

export type SectionId = "spaces";

type ScrollTarget = {
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { offset?: number; immediate?: boolean },
  ) => void;
};

/** In-memory copy — survives React Strict Mode and beats sessionStorage races. */
let memoryHomeScrollY: number | null = null;

export function clearUrlHash() {
  if (typeof window === "undefined") return;
  if (!window.location.hash) return;
  const clean = window.location.pathname + window.location.search;
  window.history.replaceState(null, "", clean);
}

/** Save home scroll so returning from a collection restores the same place. */
export function rememberHomeScroll(y: number) {
  if (typeof window === "undefined") return;
  const next = Math.round(Math.max(0, y));
  memoryHomeScrollY = next;
  window.sessionStorage.setItem(HOME_SCROLL_KEY, String(next));
  window.sessionStorage.setItem(HOME_SCROLL_RESTORE_KEY, "1");
}

export function clearHomeScrollRestore() {
  memoryHomeScrollY = null;
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(HOME_SCROLL_RESTORE_KEY);
  window.sessionStorage.removeItem(HOME_SCROLL_KEY);
}

export function hasHomeScrollRestore() {
  if (memoryHomeScrollY != null) return true;
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(HOME_SCROLL_RESTORE_KEY) === "1";
}

/** Read saved Y without clearing — safe under React Strict Mode double-effects. */
export function peekHomeScrollRestore(): number | null {
  if (memoryHomeScrollY != null && Number.isFinite(memoryHomeScrollY)) {
    return memoryHomeScrollY;
  }
  if (typeof window === "undefined") return null;
  if (window.sessionStorage.getItem(HOME_SCROLL_RESTORE_KEY) !== "1") {
    return null;
  }
  const raw = window.sessionStorage.getItem(HOME_SCROLL_KEY);
  const y = Number(raw);
  if (!Number.isFinite(y) || y < 0) return null;
  memoryHomeScrollY = y;
  return y;
}

export function consumeHomeScrollRestore(): number | null {
  const y = peekHomeScrollRestore();
  clearHomeScrollRestore();
  return y;
}

export function requestSectionScroll(id: SectionId) {
  if (typeof window === "undefined") return;
  clearHomeScrollRestore();
  window.sessionStorage.setItem(SECTION_SCROLL_KEY, id);
}

export function consumeSectionScroll(): SectionId | null {
  if (typeof window === "undefined") return null;
  const id = window.sessionStorage.getItem(SECTION_SCROLL_KEY);
  if (!id) return null;
  window.sessionStorage.removeItem(SECTION_SCROLL_KEY);
  if (id === "spaces") {
    return id;
  }
  return null;
}

export function scrollToSection(
  id: SectionId,
  scroller?: ScrollTarget | null,
  options?: { immediate?: boolean },
) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  scrollToElement(el, scroller, options);
  clearUrlHash();
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getWindowScrollY(scroller?: { scroll?: number } | null) {
  if (typeof window === "undefined") return 0;
  const native = window.scrollY || document.documentElement.scrollTop || 0;
  const fromLenis =
    scroller && typeof scroller.scroll === "number" ? scroller.scroll : 0;
  return Math.max(native, fromLenis);
}

export function isCollectionPath(path: string) {
  return path === "/koleksiyon" || path.startsWith("/koleksiyon/");
}

export function scrollToElement(
  el: HTMLElement,
  scroller?: ScrollTarget | null,
  options?: { immediate?: boolean },
) {
  if (typeof window === "undefined") return;

  const margin = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const immediate = options?.immediate ?? prefersReducedMotion();

  if (scroller) {
    scroller.scrollTo(el, {
      offset: -margin,
      immediate,
    });
  } else {
    el.scrollIntoView({
      behavior: immediate ? "auto" : "smooth",
      block: "start",
    });
  }
}

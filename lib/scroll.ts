export const SECTION_SCROLL_KEY = "asilsa-scroll-to";

export type SectionId = "spaces" | "contact" | "location";

type ScrollTarget = {
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { offset?: number; immediate?: boolean },
  ) => void;
};

export function clearUrlHash() {
  if (typeof window === "undefined") return;
  if (!window.location.hash) return;
  const clean = window.location.pathname + window.location.search;
  window.history.replaceState(null, "", clean);
}

export function requestSectionScroll(id: SectionId) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(SECTION_SCROLL_KEY, id);
}

export function consumeSectionScroll(): SectionId | null {
  if (typeof window === "undefined") return null;
  const id = window.sessionStorage.getItem(SECTION_SCROLL_KEY);
  if (!id) return null;
  window.sessionStorage.removeItem(SECTION_SCROLL_KEY);
  if (id === "spaces" || id === "contact" || id === "location") {
    return id;
  }
  return null;
}

export function scrollToSection(
  id: SectionId,
  scroller?: ScrollTarget | null,
) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  scrollToElement(el, scroller);
  clearUrlHash();
}

export function scrollToElement(
  el: HTMLElement,
  scroller?: ScrollTarget | null,
  options?: { immediate?: boolean },
) {
  if (typeof window === "undefined") return;

  const margin = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0;

  if (scroller) {
    scroller.scrollTo(el, {
      offset: -margin,
      immediate: options?.immediate ?? false,
    });
  } else {
    el.scrollIntoView({
      behavior: options?.immediate ? "auto" : "smooth",
      block: "start",
    });
  }
}

/** Shared Lenis instance for scroll lock / restore outside React trees. */

type LenisLike = {
  scroll?: number;
  stop: () => void;
  start: () => void;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { immediate?: boolean; force?: boolean },
  ) => void;
};

let instance: LenisLike | null = null;

export function registerLenis(lenis: LenisLike | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

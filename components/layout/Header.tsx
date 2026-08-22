"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { brand } from "@/lib/contact";

type NavKey = "collections" | "careers" | "contact";

const navItems: { key: NavKey; href: string }[] = [
  { key: "collections", href: "/#collections" },
  { key: "careers", href: "/careers" },
  { key: "contact", href: "/#contact" },
];

type Underline = { left: number; width: number };

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<NavKey | null>(null);
  const [underline, setUnderline] = useState<Underline | null>(null);
  const { t } = useLanguage();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Partial<Record<NavKey, HTMLAnchorElement | null>>>(
    {},
  );

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const labels: Record<NavKey, string> = {
    collections: t.nav.collections,
    careers: t.nav.careers,
    contact: t.nav.contact,
  };

  useEffect(() => {
    document.body.classList.toggle("scroll-locked", isMobileMenuOpen);
    return () => document.body.classList.remove("scroll-locked");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (pathname === "/careers") {
      setActive("careers");
      return;
    }

    if (pathname !== "/") {
      setActive(null);
      return;
    }

    const sectionIds: NavKey[] = ["collections", "contact"];
    const ratios = new Map<NavKey, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as NavKey;
          if (sectionIds.includes(id)) {
            ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          }
        }

        let best: NavKey | null = null;
        let bestRatio = 0.12;
        for (const id of sectionIds) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }

        const nearBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 120;
        if (nearBottom) best = "contact";

        setActive(best);
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.45, 0.6],
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "collections" || hash === "contact") setActive(hash);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", applyHash);
    };
  }, [pathname]);

  useLayoutEffect(() => {
    const updateUnderline = () => {
      if (!active || !navRef.current) {
        setUnderline(null);
        return;
      }
      const link = linkRefs.current[active];
      if (!link) {
        setUnderline(null);
        return;
      }
      const navBox = navRef.current.getBoundingClientRect();
      const linkBox = link.getBoundingClientRect();
      setUnderline({
        left: linkBox.left - navBox.left,
        width: linkBox.width,
      });
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active, t.nav.collections, t.nav.careers, t.nav.contact]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full bg-asilsa-cream/80 pt-[env(safe-area-inset-top)] backdrop-blur-md ${isMobileMenuOpen ? "z-[70] bg-asilsa-cream" : ""}`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-fluid py-3.5 sm:py-5 md:grid md:grid-cols-3 md:py-6">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="min-w-0 truncate font-serif text-[0.75rem] font-light tracking-[0.08em] text-museum-dark sm:text-sm sm:tracking-[0.12em] md:justify-self-start md:text-base"
          >
            {brand.name}
          </Link>

          <nav
            ref={navRef}
            className="relative hidden items-center justify-center gap-4 justify-self-center md:flex lg:gap-8 xl:gap-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                ref={(el) => {
                  linkRefs.current[item.key] = el;
                }}
                className={`relative pb-1.5 text-[0.7rem] uppercase tracking-[0.14em] transition-colors duration-300 lg:text-sm lg:tracking-[0.2em] ${
                  active === item.key
                    ? "text-museum-dark"
                    : "text-gray-800 hover:text-asilsa-gold"
                }`}
                aria-current={active === item.key ? "page" : undefined}
              >
                {labels[item.key]}
              </Link>
            ))}

            <AnimatePresence>
              {underline && (
                <motion.span
                  key="nav-underline"
                  className="pointer-events-none absolute bottom-0 h-px bg-asilsa-gold"
                  initial={false}
                  animate={{
                    left: underline.left,
                    width: underline.width,
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                    mass: 0.7,
                  }}
                />
              )}
            </AnimatePresence>
          </nav>

          <LanguageToggle className="hidden md:flex md:justify-self-end" />

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={
              isMobileMenuOpen ? t.common.closeMenu : t.common.openMenu
            }
            aria-expanded={isMobileMenuOpen}
            className="relative z-[70] -mr-1 flex h-10 w-10 shrink-0 items-center justify-center text-museum-dark md:hidden"
          >
            {isMobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-6 w-6"
                aria-hidden
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-6 w-6"
                aria-hidden
              >
                <path strokeLinecap="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[65] flex flex-col bg-asilsa-cream md:hidden"
          >
            <div
              className="shrink-0"
              style={{ height: "calc(3.75rem + env(safe-area-inset-top))" }}
              aria-hidden
            />

            <nav className="flex flex-1 flex-col items-center justify-center gap-7 px-6 pb-safe">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`relative pb-2 text-xl font-light uppercase tracking-[0.2em] transition-colors ${
                    active === item.key
                      ? "text-asilsa-gold"
                      : "text-museum-dark active:text-asilsa-gold"
                  }`}
                  aria-current={active === item.key ? "page" : undefined}
                >
                  {labels[item.key]}
                  {active === item.key && (
                    <motion.span
                      layoutId="mobile-nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-asilsa-gold"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 28,
                      }}
                    />
                  )}
                </Link>
              ))}

              <span className="mt-4 block h-px w-10 bg-asilsa-gold" />
              <LanguageToggle className="mt-2 tracking-[0.3em]" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

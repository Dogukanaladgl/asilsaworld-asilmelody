"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/#collections", label: "Collections", external: false },
  {
    href: "https://asilmelody.com",
    label: "Asil Melody",
    external: true,
  },
  { href: "/careers", label: "Careers", external: false },
  { href: "#contact", label: "Contact", external: false },
] as const;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full bg-asilsa-cream/70 py-6 backdrop-blur-md"
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 md:grid md:grid-cols-3 md:px-10">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="font-serif text-sm font-light tracking-[0.25em] text-museum-dark md:justify-self-start md:text-base"
          >
            ASILSA WORLD
          </Link>

          <nav className="hidden items-center justify-center gap-8 justify-self-center md:flex lg:gap-10">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.2em] text-gray-800 transition-colors hover:text-asilsa-gold"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] text-gray-800 transition-colors hover:text-asilsa-gold"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <button
            type="button"
            onClick={() => {}}
            className="hidden text-sm font-light tracking-[0.2em] text-gray-800 transition-colors hover:text-asilsa-gold md:flex md:justify-self-end"
            aria-label="Switch language"
          >
            TR / EN
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="relative z-[70] flex h-8 w-8 items-center justify-center text-museum-dark md:hidden"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[65] flex flex-col items-center justify-center bg-asilsa-cream/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="text-2xl font-light uppercase tracking-widest text-museum-dark transition-colors hover:text-asilsa-gold"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-2xl font-light uppercase tracking-widest text-museum-dark transition-colors hover:text-asilsa-gold"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            <span className="mt-14 block h-px w-10 bg-asilsa-gold" />

            <button
              type="button"
              onClick={() => {}}
              className="mt-14 text-sm font-light tracking-[0.3em] text-museum-dark/70 transition-colors hover:text-asilsa-gold"
              aria-label="Switch language"
            >
              TR / EN
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

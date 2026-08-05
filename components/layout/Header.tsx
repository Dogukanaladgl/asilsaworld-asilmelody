"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#collections", label: "Collections", external: false },
  {
    href: "https://asilmelody.com",
    label: "Asil Melody",
    external: true,
  },
  { href: "/careers", label: "Careers", external: false },
  { href: "#contact", label: "Contact", external: false },
] as const;

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full bg-asilsa-cream/70 py-6 backdrop-blur-md"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-3 items-center px-6 md:px-10">
        <Link
          href="/"
          className="justify-self-start font-serif text-sm font-light tracking-[0.25em] text-museum-dark md:text-base"
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
          className="justify-self-end text-sm font-light tracking-[0.2em] text-gray-800 transition-colors hover:text-asilsa-gold"
          aria-label="Switch language"
        >
          TR / EN
        </button>
      </div>
    </motion.header>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/50 bg-asilsa-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:gap-10 md:px-10 md:py-20">
        <div>
          <Link
            href="/"
            className="font-serif text-sm font-light tracking-[0.25em] text-museum-dark"
          >
            ASILSA WORLD
          </Link>
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed tracking-wide text-museum-dark/60">
            A premium furniture lookbook — elegance in every detail, crafted for
            refined living spaces.
          </p>
        </div>

        <div>
          <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-museum-dark/50">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href="/#collections"
                className="text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
              >
                Careers
              </Link>
            </li>
            <li>
              <a
                href="https://asilmelody.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
              >
                Asil Melody
              </a>
            </li>
          </ul>
        </div>

        <div id="contact">
          <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-museum-dark/50">
            Contact
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@asilsa.world"
                className="text-sm font-light tracking-wide text-museum-dark/70 transition-colors hover:text-asilsa-gold"
              >
                hello@asilsa.world
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200/40 px-6 py-6 md:px-10">
        <p className="text-center text-[0.65rem] font-light tracking-[0.15em] text-museum-dark/45">
          © 2026 Asilsa World. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

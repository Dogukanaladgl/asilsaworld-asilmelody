import { contact } from "@/lib/contact";

type SocialVariant = "onDark" | "onLight";

const socialItems = [
  { key: "facebook", label: "Facebook", href: contact.social.facebook },
  { key: "instagram", label: "Instagram", href: contact.social.instagram },
  { key: "tiktok", label: "TikTok", href: contact.social.tiktok },
  { key: "x", label: "X", href: contact.social.x },
  { key: "youtube", label: "YouTube", href: contact.social.youtube },
] as const;

function SocialGlyph({ name }: { name: (typeof socialItems)[number]["key"] }) {
  switch (name) {
    case "facebook":
      return (
        <path
          fill="currentColor"
          d="M14.5 8.5V10h2l-.3 2.2H14.5V18h-2.4v-5.8H10.5V10h1.6V8.7c0-1.6.8-2.7 2.8-2.7h1.6V8.5h-1.1c-.8 0-.9.3-.9 1Z"
        />
      );
    case "instagram":
      return (
        <>
          <rect
            x="6"
            y="6"
            width="12"
            height="12"
            rx="3.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="12"
            cy="12"
            r="2.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="15.7" cy="8.3" r="0.85" fill="currentColor" />
        </>
      );
    case "tiktok":
      return (
        <path
          fill="currentColor"
          d="M14.2 6c.4 1.7 1.6 3 3.3 3.3v2.1a5.4 5.4 0 0 1-3.3-1.1v4.8a4.6 4.6 0 1 1-4.6-4.6c.2 0 .5 0 .7.1v2.2a2.4 2.4 0 1 0 1.7 2.3V6h2.2Z"
        />
      );
    case "x":
      return (
        <path
          fill="currentColor"
          d="M6.4 6.5h2.5l3.1 4.1 3.6-4.1H17l-4.4 5 4.7 6H14.8l-3.4-4.4-3.9 4.4H6l4.7-5.3-4.3-5.7Z"
        />
      );
    case "youtube":
      return (
        <>
          <rect
            x="4.2"
            y="7"
            width="15.6"
            height="10"
            rx="2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path fill="currentColor" d="M10.5 9.6v4.8l4.2-2.4-4.2-2.4Z" />
        </>
      );
  }
}

export default function SocialIcons({
  variant = "onLight",
  className = "",
}: {
  variant?: SocialVariant;
  className?: string;
}) {
  const onDark = variant === "onDark";

  return (
    <ul className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      {socialItems.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12 ${
              onDark
                ? "bg-asilsa-cream text-museum-dark hover:bg-asilsa-gold"
                : "bg-museum-dark text-asilsa-cream hover:bg-asilsa-gold hover:text-museum-dark"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" aria-hidden>
              <SocialGlyph name={item.key} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

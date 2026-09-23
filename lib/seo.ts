import type { Metadata } from "next";
import { brand, contact } from "@/lib/contact";

const fallbackSiteUrl = "https://asilsaworld.com";

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return fallbackSiteUrl;
}

export const siteConfig = {
  name: brand.name,
  tagline: "Premium Furniture Lookbook",
  description:
    "Asil's a World — zarafet, konfor ve kusursuz detaylarla şekillenen premium mobilya. 2027 Güncel Katalog, Konya showroom.",
  locale: "tr_TR",
  languages: ["tr", "en", "ja", "es", "ru"] as const,
};

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? absoluteUrl(image)
    : absoluteUrl("/catalog/2027/covers/living.webp");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 1600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function getOrganizationJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: brand.name,
    url,
    email: contact.email,
    telephone: contact.phoneHref.replace("tel:", ""),
    image: absoluteUrl("/catalog/2027/covers/living.webp"),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLines[0],
      addressLocality: "Karatay",
      addressRegion: "Konya",
      addressCountry: "TR",
    },
    openingHours: "Mo-Su 08:00-20:00",
    sameAs: [
      contact.social.facebook,
      contact.social.instagram,
      contact.social.tiktok,
      contact.social.x,
      contact.social.youtube,
    ],
  };
}

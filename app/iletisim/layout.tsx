import type { Metadata } from "next";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `İletişim & Showroom | ${siteConfig.name}`,
  description:
    "Asil's a World showroom: Fevziçakmak, Karatay / Konya. Telefon, çalışma saatleri ve yol tarifi.",
  path: "/iletisim",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

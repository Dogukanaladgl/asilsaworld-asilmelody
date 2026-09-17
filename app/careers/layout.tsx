import type { Metadata } from "next";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Kariyer | ${siteConfig.name}`,
  description:
    "Asil's a World kariyer fırsatları. Başvurunuzu gönderin veya WhatsApp üzerinden hızlıca iletişime geçin.",
  path: "/careers",
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

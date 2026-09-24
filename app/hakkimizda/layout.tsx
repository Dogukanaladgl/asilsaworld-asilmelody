import type { Metadata } from "next";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Hakkımızda | ${siteConfig.name}`,
  description:
    "Asil's a World — kalite ve zarafet, el yapımı mobilyalar ve sürdürülebilir malzemelerle şekillenen premium mobilya hikâyesi.",
  path: "/hakkimizda",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

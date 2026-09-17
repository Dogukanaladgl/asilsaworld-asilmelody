import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Spaces from "@/components/layout/Spaces";
import About from "@/components/layout/About";
import PartnerBanner from "@/components/layout/PartnerBanner";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Spaces />
      <About />
      <PartnerBanner />
    </>
  );
}

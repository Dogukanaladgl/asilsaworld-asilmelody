import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Spaces from "@/components/layout/Spaces";
import Deliveries from "@/components/layout/Deliveries";
import About from "@/components/layout/About";
import PartnerBanner from "@/components/layout/PartnerBanner";
import { getDeliveryPosts } from "@/lib/instagram";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default async function Home() {
  const deliveryPosts = await getDeliveryPosts();

  return (
    <>
      <Hero />
      <Features />
      <Spaces />
      <Deliveries posts={deliveryPosts} />
      <About />
      <PartnerBanner />
    </>
  );
}

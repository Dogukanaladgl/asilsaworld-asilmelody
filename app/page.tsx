import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Spaces from "@/components/layout/Spaces";
import Featured from "@/components/layout/Featured";
import Collections from "@/components/layout/Collections";
import About from "@/components/layout/About";
import PartnerBanner from "@/components/layout/PartnerBanner";
import Location from "@/components/layout/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Spaces />
      <Featured />
      <Collections />
      <About />
      <PartnerBanner />
      <Location />
    </>
  );
}

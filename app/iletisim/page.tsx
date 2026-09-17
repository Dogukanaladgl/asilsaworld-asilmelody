"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import Location from "@/components/layout/Location";
import ContactInvite from "@/components/layout/ContactInvite";

export default function ContactPage() {
  const lenis = useLenis();

  useEffect(() => {
    const toTop = () => {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    toTop();
    const t1 = window.setTimeout(toTop, 0);
    const t2 = window.setTimeout(toTop, 100);
    const t3 = window.setTimeout(toTop, 300);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [lenis]);

  return (
    <div className="bg-asilsa-cream pt-4 md:pt-6">
      <Location />
      <ContactInvite />
    </div>
  );
}

"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrolling({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    // Keeps ScrollTrigger accurate while Lenis animates the window scroll position.
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(ScrollTrigger.update);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop";

const textContainer = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.6, staggerChildren: 0.25 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(parallaxRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-32 flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden"
    >
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGE}
            alt="Minimalist premium living space"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-serif text-4xl font-light leading-tight tracking-wide text-asilsa-cream md:text-6xl lg:text-7xl"
        >
          Elegance in Every Detail.
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-sm font-light tracking-[0.2em] text-asilsa-cream/85 md:text-base"
        >
          Discover the art of living spaces.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-asilsa-cream/80">
            Scroll to Explore
          </span>
          <span className="h-12 w-px bg-gradient-to-b from-asilsa-cream/70 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

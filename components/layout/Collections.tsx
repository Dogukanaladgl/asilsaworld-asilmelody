"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import LightboxModal, {
  type LightboxItem,
} from "@/components/ui/LightboxModal";

const collections: LightboxItem[] = [
  {
    id: "1",
    title: "Linen Lounge",
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    description:
      "Soft linen upholstery meets sculptural form — a lounge piece designed for quiet, elevated living.",
  },
  {
    id: "2",
    title: "Oak Dining",
    imageUrl:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    description:
      "Warm oak surfaces and balanced proportions create a dining experience rooted in timeless craft.",
  },
  {
    id: "3",
    title: "Serene Bedroom",
    imageUrl:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    description:
      "A calm sanctuary of muted tones and refined textures, composed for restful elegance.",
  },
  {
    id: "4",
    title: "Marble Accent",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    description:
      "Natural marble veining and clean geometry — an accent that anchors the room with quiet luxury.",
  },
  {
    id: "5",
    title: "Velvet Corner",
    imageUrl:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Deep velvet and inviting curves invite conversation, comfort, and understated sophistication.",
  },
  {
    id: "6",
    title: "Reading Nook",
    imageUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
    description:
      "A intimate composition of soft seating and warm light — designed for slow, intentional moments.",
  },
  {
    id: "7",
    title: "Soft Gallery",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Gallery-like spacing and soft neutrals turn everyday living into a curated visual experience.",
  },
  {
    id: "8",
    title: "Morning Light",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sunlit surfaces and airy forms celebrate openness — furniture that breathes with the room.",
  },
];

const aspectClasses: Record<string, string> = {
  "1": "aspect-[3/4]",
  "2": "aspect-square",
  "3": "aspect-[4/5]",
  "4": "aspect-[3/4]",
  "5": "aspect-[5/4]",
  "6": "aspect-square",
  "7": "aspect-[3/4]",
  "8": "aspect-[4/5]",
};

export default function Collections() {
  const [selectedItem, setSelectedItem] = useState<LightboxItem | null>(null);

  return (
    <section
      id="collections"
      className="scroll-mt-28 bg-asilsa-cream px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto mb-16 max-w-7xl text-center md:mb-20">
        <h2 className="font-serif text-3xl font-light tracking-wide text-museum-dark md:text-4xl">
          Curated Collections
        </h2>
        <span className="mx-auto mt-5 block h-px w-12 bg-asilsa-gold" />
      </div>

      <div className="mx-auto max-w-7xl columns-1 gap-6 sm:columns-2 lg:columns-3">
        {collections.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group mb-6 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className={`relative block w-full cursor-pointer overflow-hidden text-left ${aspectClasses[item.id]}`}
              aria-label={`View details for ${item.title}`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex translate-y-4 flex-col items-center gap-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-sm tracking-wide text-asilsa-cream">
                  {item.title}
                </p>
                <span className="border border-asilsa-cream/80 px-5 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-asilsa-cream transition-colors group-hover:bg-asilsa-cream/10">
                  Bilgi Al
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <LightboxModal
            key={selectedItem.id}
            isOpen={!!selectedItem}
            onClose={() => setSelectedItem(null)}
            item={selectedItem}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

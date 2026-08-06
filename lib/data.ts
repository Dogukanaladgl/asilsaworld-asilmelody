import type { LocalizedText } from "@/lib/i18n";

export interface FurnitureItem {
  id: string;
  title: string;
  category: LocalizedText;
  description: LocalizedText;
  imageUrl: string;
}

export const furnitureData: FurnitureItem[] = [
  {
    id: "ASL-001",
    title: "Linen Lounge",
    category: { tr: "Oturma Odası", en: "Living Room" },
    description: {
      tr: "Yumuşak keten döşeme ile heykelsi form buluşuyor; sakin ve yükseltilmiş bir yaşam için tasarlanmış bir dinlenme parçası.",
      en: "Soft linen upholstery meets sculptural form in a lounge piece designed for quiet, elevated living.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ASL-002",
    title: "Oak Dining",
    category: { tr: "Yemek Odası", en: "Dining Room" },
    description: {
      tr: "Sıcak meşe yüzeyler ve dengeli oranlar, zamansız zanaata dayanan bir yemek deneyimi yaratıyor.",
      en: "Warm oak surfaces and balanced proportions create a dining experience rooted in timeless craftsmanship.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ASL-003",
    title: "Serene Bedroom",
    category: { tr: "Yatak Odası", en: "Bedroom" },
    description: {
      tr: "Yumuşatılmış tonlar ve incelikli dokulardan oluşan sakin bir sığınak; dingin bir zarafet için kurgulandı.",
      en: "A calm sanctuary of muted tones and refined textures, composed for restful elegance.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ASL-004",
    title: "Marble Accent",
    category: { tr: "Aksesuar Parçalar", en: "Accent Pieces" },
    description: {
      tr: "Doğal mermer damarları ve arınmış geometri, mekâna sessiz bir lüks hissiyle kimlik kazandırıyor.",
      en: "Natural marble veining and clean geometry anchor the room with a sense of quiet luxury.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ASL-005",
    title: "Velvet Corner",
    category: { tr: "L Koltuklar", en: "L-Sofas" },
    description: {
      tr: "Derin kadife ve davetkâr kıvrımlar; konforu, sohbeti ve gösterişsiz zarafeti bir araya getiriyor.",
      en: "Deep velvet and inviting curves bring together comfort, conversation, and understated sophistication.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ASL-006",
    title: "Reading Nook",
    category: { tr: "Berjer & Koltuk", en: "Lounge Chairs" },
    description: {
      tr: "Yumuşak oturum ve sıcak ışığın samimi kompozisyonu; yavaş ve bilinçli anlar için tasarlandı.",
      en: "An intimate composition of soft seating and warm light, designed for slow and intentional moments.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ASL-007",
    title: "Soft Gallery",
    category: { tr: "Oturma Odası", en: "Living Room" },
    description: {
      tr: "Galeri hissi veren ferah yerleşim ve yumuşak nötr tonlar, gündelik yaşamı seçkin bir görsel deneyime dönüştürüyor.",
      en: "Gallery-like spacing and soft neutrals turn everyday living into a curated visual experience.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ASL-008",
    title: "Morning Light",
    category: { tr: "İç Mekân Objeleri", en: "Interior Objects" },
    description: {
      tr: "Güneş alan yüzeyler ve hafif formlar; mekânla birlikte nefes alan mobilyalarla açıklığı kutluyor.",
      en: "Sunlit surfaces and airy forms celebrate openness with furniture that breathes alongside the room.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
];

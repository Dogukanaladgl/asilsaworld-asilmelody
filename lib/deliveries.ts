import { contact } from "@/lib/contact";

export type DeliveryPost = {
  id: string;
  image: string;
  alt: string;
  /** Opens this URL (Instagram post permalink when live). */
  href?: string;
};

/**
 * Fallback tiles when Instagram API credentials are not configured.
 * Swap images / add `href` post permalinks anytime.
 */
export const fallbackDeliveryPosts: DeliveryPost[] = [
  {
    id: "corner",
    image: "/catalog/2027/covers/corner.webp",
    alt: "Köşe koltuk teslimatı",
  },
  {
    id: "living",
    image: "/catalog/2027/covers/living.webp",
    alt: "Salon takımı teslimatı",
  },
  {
    id: "bedroom",
    image: "/catalog/2027/covers/bedroom.webp",
    alt: "Yatak odası teslimatı",
  },
  {
    id: "bedset",
    image: "/catalog/2027/covers/bedset.webp",
    alt: "Yatak baza teslimatı",
  },
  {
    id: "dining",
    image: "/catalog/2027/covers/dining.webp",
    alt: "Yemek odası teslimatı",
  },
  {
    id: "kapak",
    image: "/about/kapak.webp",
    alt: "Oturma grubu teslimatı",
  },
];

/** @deprecated use fallbackDeliveryPosts */
export const deliveryPosts = fallbackDeliveryPosts;

export const instagramUrl = contact.social.instagram;
export const instagramHandle = contact.instagramHandle;

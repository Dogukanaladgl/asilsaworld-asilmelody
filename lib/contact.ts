/**
 * Business contact details — edit this file only.
 * WhatsApp number must be digits only, with country code (no + or spaces).
 */
export const brand = {
  name: "Asil's a World",
} as const;

export const contact = {
  phoneDisplay: "0530 012 27 00",
  phoneHref: "tel:+905300122700",
  whatsappNumber: "905300122700",
  email: "hello@asilsa.world",
  instagramHandle: "@asilsa.world",
  instagramUrl: "https://instagram.com/asilsa.world",
  // Location
  addressLines: ["Fevziçakmak, 10740. Sokak No: 1", "Karatay / Konya, Türkiye"],
  addressShort: "Karatay, Konya",
  mapsQuery: "Fevziçakmak, 10740. Sokak No:1, Karatay/Konya, Türkiye",
  // Hours
  hoursDisplay: "08:00 – 20:00",
  hoursNote: "Her gün",
} as const;

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getMapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`;
}

export function getMapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&z=15&output=embed`;
}

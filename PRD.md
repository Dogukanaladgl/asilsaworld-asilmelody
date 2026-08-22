# Project Overview: Asil's a World & Asil Melody
Act as an expert Frontend Developer, Next.js Architect, and UI/UX Designer. We are building a premium digital ecosystem consisting of two distinct but connected web experiences. 

## Global Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion & GSAP (Heavy focus on scroll-driven animations, parallax, and smooth layout transitions)
- **i18n:** Client-side dictionary or `next-intl` for instant, reload-free TR/EN translation switches.
- **Backend/CMS:** Sanity.io (for managing 50+ furniture images and music links easily without custom UI heavy-lifting) or Vercel Postgres/Blob.

---

## 1. Asil's a World (Premium Furniture Lookbook)
**Concept:** A high-end digital catalog/magazine. No e-commerce, no cart.
- **Color Palette:** Soft creams, beige, elegant gold accents, and abundant negative space.
- **Layout (Desktop):** Asymmetrical editorial "Masonry" grid for 50 items (Living Room, L-Sofas, Bedrooms).
- **Layout (Mobile):** Full-width or neat 2-column grid. Items enter the screen with a smooth `fade-in-up` and slight `scale` effect as the user scrolls.
- **Smart Inquiry (Action):** Clicking an item opens a minimalist modal/lightbox. The "Inquire" (Bilgi Al) button automatically appends the item's Title/ID to a WhatsApp redirect or an internal contact form.
- **Careers Page:** A clean, multi-step application form with CV upload functionality.
- **Cross-Promotion:** A highly aesthetic "Partners/Inspiration" banner linking to `asilmelody.com` (`target="_blank"`).

---

## 2. Asil Melody / Asi İldeniz (The "Warm Museum" Music Hub)
**Concept:** A premium, "Warm Museum" smart-link and portfolio page inspired by dark/underground layouts but executed with warm, gallery-like aesthetics.
- **Color & Lighting:** Bone, warm beige, and soft brown tones. Use CSS `radial-gradient` to create a "spotlight" effect on content, mimicking a physical art gallery.
- **Layout:** Blocky, highly organized grid/list layout (similar to classic record label sites), but with luxurious spacing and typography.
- **Animations:** GSAP/Framer Motion timeline animations. As the user scrolls, the hero image slowly scales down (parallax), and track/album links slide in smoothly as if walking past paintings in a museum.
- **Redirection Logic:** No internal audio player. Buttons are minimalist, single-color (monochrome) outlines. Hovering reveals a soft glow. All links (Spotify, YouTube, Apple Music) strictly use `target="_blank" rel="noopener noreferrer"`.

---

## Developer Instructions
1. **Initialize Next.js:** Scaffold the App Router setup. Keep components highly modular (e.g., separate `FurnitureGrid`, `SmartInquireModal`, `MuseumLinkList`).
2. **Animation First:** Do not write static UI. Every mount and scroll action should be wrapped in Framer Motion variants.
3. **Typography:** Use an elegant, thin serif or modern sans-serif font combination.
4. **i18n Implementation:** Create a sleek, minimalist `TR / EN` toggle in the header that updates context state immediately without route reloads.

Please generate the foundational project structure, the tailored Tailwind configuration (with the warm museum and cream palettes), and the `RootLayout` first.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Asil's a World — Premium Furniture Lookbook
        "asilsa-cream": "#F7F3EE",
        "asilsa-beige": "#E8DFD3",
        "asilsa-gold": "#C4A574",
        // Asil Melody — Warm Museum
        "museum-bone": "#F2EDE6",
        "museum-brown": "#8B7355",
        "museum-dark": "#2C241C",
      },
      backgroundImage: {
        "museum-spotlight":
          "radial-gradient(ellipse at center, rgba(242, 237, 230, 0.95) 0%, rgba(232, 223, 211, 0.6) 40%, rgba(44, 36, 28, 0.85) 100%)",
      },
      fontFamily: {
        serif: [
          "var(--font-playfair)",
          "var(--font-noto-serif-jp)",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-geist-sans)",
          "var(--font-noto-sans-jp)",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

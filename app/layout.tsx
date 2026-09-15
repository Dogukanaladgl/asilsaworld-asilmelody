import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Geist,
  Geist_Mono,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import LanguageProvider from "@/components/providers/LanguageProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Japanese glyphs are missing from Playfair/Geist; these carry the JA fallback.
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asil's a World | Premium Furniture Lookbook",
  description: "Asil's a World | Premium Furniture Lookbook",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F7F3EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} ${notoSansJp.variable} ${notoSerifJp.variable} font-sans`}
      >
        <LanguageProvider>
          <SmoothScrolling>
            <Header />
            <main className="pt-[calc(3.75rem+env(safe-area-inset-top))] sm:pt-24 md:pt-32">
              {children}
            </main>
            <Footer />
            <FloatingContact />
          </SmoothScrolling>
        </LanguageProvider>
      </body>
    </html>
  );
}

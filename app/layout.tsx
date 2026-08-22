import type { Metadata, Viewport } from "next";
import { Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import LanguageProvider from "@/components/providers/LanguageProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
        className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <LanguageProvider>
          <SmoothScrolling>
            <Header />
            <main className="pt-20 sm:pt-24 md:pt-32">{children}</main>
            <Footer />
            <FloatingContact />
          </SmoothScrolling>
        </LanguageProvider>
      </body>
    </html>
  );
}

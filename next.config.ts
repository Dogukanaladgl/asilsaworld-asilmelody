import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phone / LAN / tunnel access to the Turbopack dev server.
  // Without this, Next warns: "Cross origin request detected from <LAN-IP>".
  allowedDevOrigins: [
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
    "*.local",
    "*.trycloudflare.com",
  ],
  images: {
    qualities: [75, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/katalog",
        destination: "/#spaces",
        permanent: true,
      },
      {
        source: "/katalog/living",
        destination: "/koleksiyon/salon",
        permanent: true,
      },
      {
        source: "/katalog/bedroom",
        destination: "/#spaces",
        permanent: false,
      },
      {
        source: "/koleksiyon/yatak-odasi",
        destination: "/#spaces",
        permanent: false,
      },
      {
        source: "/koleksiyon/yemek-odasi",
        destination: "/#spaces",
        permanent: false,
      },
      {
        source: "/katalog/bedset",
        destination: "/koleksiyon/yatak-baza",
        permanent: true,
      },
      {
        source: "/katalog/dining",
        destination: "/#spaces",
        permanent: false,
      },
      {
        source: "/katalog/lamia",
        destination: "/koleksiyon/yatak-baza",
        permanent: true,
      },
      {
        source: "/koleksiyon/lamia",
        destination: "/koleksiyon/yatak-baza",
        permanent: true,
      },
      {
        source: "/katalog/corner",
        destination: "/koleksiyon/kose",
        permanent: true,
      },
      {
        source: "/katalog/others",
        destination: "/koleksiyon/digerleri",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

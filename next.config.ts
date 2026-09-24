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
    // Prefer large candidates so retina / resized windows stay sharp.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 2560, 3200, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
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
        destination: "/koleksiyon/yatak-odasi",
        permanent: true,
      },
      {
        source: "/katalog/dining",
        destination: "/koleksiyon/yemek-odasi",
        permanent: true,
      },
      {
        source: "/katalog/bedset",
        destination: "/koleksiyon/yatak-baza",
        permanent: true,
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
      // Former named-suite categories → room pages
      {
        source: "/koleksiyon/alacati",
        destination: "/koleksiyon/yatak-odasi",
        permanent: true,
      },
      {
        source: "/koleksiyon/alisya-gold",
        destination: "/koleksiyon/yatak-odasi",
        permanent: true,
      },
      {
        source: "/koleksiyon/alyans",
        destination: "/koleksiyon/yatak-odasi",
        permanent: true,
      },
      {
        source: "/koleksiyon/tokyo",
        destination: "/koleksiyon/yatak-odasi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

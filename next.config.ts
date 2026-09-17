import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 95],
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
        destination: "/koleksiyon/yatak-odasi",
        permanent: true,
      },
      {
        source: "/katalog/bedset",
        destination: "/koleksiyon/yatak-baza",
        permanent: true,
      },
      {
        source: "/katalog/dining",
        destination: "/koleksiyon/yemek-odasi",
        permanent: true,
      },
      {
        source: "/katalog/lamia",
        destination: "/koleksiyon/lamia",
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

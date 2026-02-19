import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [400, 640, 750, 828, 1080, 1200],
    qualities: [40, 50, 55, 65, 75],
    minimumCacheTTL: 31536000,
  },
  compress: true,
};

export default nextConfig;

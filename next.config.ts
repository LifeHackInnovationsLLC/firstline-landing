import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [400, 640, 750, 828, 1080, 1200],
    minimumCacheTTL: 31536000,
  },
  compress: true,
};

export default nextConfig;

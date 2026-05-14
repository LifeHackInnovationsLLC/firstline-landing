import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/firstline-landing",
  assetPrefix: "/firstline-landing",
  output: "standalone",
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/deoxevgc6/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
};

export default nextConfig;

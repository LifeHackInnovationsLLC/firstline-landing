import type { MetadataRoute } from "next";
import { SEO_CONSTANTS } from "@/lib/seo/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/api/*", "/_next/", "/private/"],
      },
      // Traditional search engines
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI search engine bots
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      // Social media crawlers
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
    ],
    sitemap: `${SEO_CONSTANTS.siteUrl}/sitemap.xml`,
    host: SEO_CONSTANTS.siteUrl,
  };
}

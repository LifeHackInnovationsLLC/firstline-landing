import type { MetadataRoute } from "next";
import { SEO_CONSTANTS } from "@/lib/seo/constants";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			// Default rule for all bots
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/api/*", "/_next/", "/private/"],
			},
			// Google
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/api/"],
			},
			// Bing
			{
				userAgent: "Bingbot",
				allow: "/",
				disallow: ["/api/"],
			},
			// DuckDuckGo
			{
				userAgent: "DuckDuckBot",
				allow: "/",
				disallow: ["/api/"],
			},
			// Yahoo
			{
				userAgent: "Slurp",
				allow: "/",
				disallow: ["/api/"],
			},
			// Yandex
			{
				userAgent: "YandexBot",
				allow: "/",
				disallow: ["/api/"],
			},
			// Social media crawlers - allow full access to public pages
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

import type { MetadataRoute } from "next";
import { SEO_CONSTANTS } from "@/lib/seo/constants";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();
	const { siteUrl } = SEO_CONSTANTS;

	const staticEntries: MetadataRoute.Sitemap = [
		{
			url: siteUrl,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${siteUrl}/agents`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${siteUrl}/affiliates`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${siteUrl}/agencies`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${siteUrl}/sellers`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${siteUrl}/contact`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${siteUrl}/privacy-policy`,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${siteUrl}/terms-of-service`,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];

	return staticEntries;
}

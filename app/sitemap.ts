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
			url: `${siteUrl}/sign-up`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${siteUrl}/contact`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${siteUrl}/sign-in`,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.4,
		},
	];

	return staticEntries;
}

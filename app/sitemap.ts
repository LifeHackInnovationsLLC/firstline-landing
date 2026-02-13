import type { MetadataRoute } from "next";
import { SEO_CONSTANTS } from "@/lib/seo/constants";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();
	const { siteUrl } = SEO_CONSTANTS;

	const staticEntries: MetadataRoute.Sitemap = [
		// Homepage - highest priority
		{
			url: siteUrl,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1.0,
		},
		// Evaluations - core product page
		{
			url: `${siteUrl}/evaluations`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.95,
		},
		// Sign up - conversion page
		{
			url: `${siteUrl}/sign-up`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		// Rewards program
		{
			url: `${siteUrl}/rewards`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		// Affiliates
		{
			url: `${siteUrl}/affiliates`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		// Competitions
		{
			url: `${siteUrl}/competitions`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.7,
		},
		// Contact
		{
			url: `${siteUrl}/contact`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.6,
		},
		// Purchase guarantee
		{
			url: `${siteUrl}/purchase-guarantee`,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.5,
		},
		// Auth pages - lower priority
		{
			url: `${siteUrl}/sign-in`,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.4,
		},
		{
			url: `${siteUrl}/forgot-password`,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];

	return staticEntries;
}

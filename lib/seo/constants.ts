export const SEO_CONSTANTS = {
	siteName: "Firstline",
	siteUrl: "https://firstline-landing.vercel.app",
	defaultTitle:
		"Firstline - The Commission Platform for Sellers, Agents & Affiliates",
	defaultDescription:
		"Split payments instantly, pay commissions in real-time, and scale globally. Firstline turns agents and affiliates into a dedicated sales team with automated payouts and real-time tracking.",
	twitterHandle: "@firstaborad",
	ogImage: "/brand/og-image.png",
} as const;

export const SEO_KEYWORDS = {
	primary: [
		"commission platform",
		"affiliate commission tracking",
		"commission management software",
		"real-time commission payouts",
		"sales commission platform",
		"affiliate payout software",
		"commission splitting",
		"Firstline",
		"partner payment platform",
		"automated commission payments",
	],
	secondary: [
		"affiliate management",
		"sales agent commission",
		"recurring commissions",
		"commission tracking software",
		"multi-tier commission",
		"real-time payout",
		"commission dashboard",
		"affiliate network management",
		"partner commission software",
		"sales team commission tool",
	],
	longtail: [
		"best commission platform for affiliates",
		"automated affiliate payout software",
		"real-time commission tracking for agencies",
		"commission management platform for sellers",
		"how to pay affiliate commissions automatically",
		"split payments between sales agents",
		"lifetime commission tracking software",
		"commission platform with no upfront cost",
		"scale affiliate network globally",
		"commission platform for payment processing",
	],
} as const;

export const ALL_KEYWORDS = [
	...SEO_KEYWORDS.primary,
	...SEO_KEYWORDS.secondary,
	...SEO_KEYWORDS.longtail,
];

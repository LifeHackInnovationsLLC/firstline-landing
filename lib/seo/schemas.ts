import { SEO_CONSTANTS } from "./constants";

/**
 * Organization schema for Elite Trader Funding
 */
export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${SEO_CONSTANTS.siteUrl}/#organization`,
	name: SEO_CONSTANTS.siteName,
	url: SEO_CONSTANTS.siteUrl,
	logo: {
		"@type": "ImageObject",
		url: `${SEO_CONSTANTS.siteUrl}/brand/etf-logo.png`,
		width: 512,
		height: 512,
	},
	image: `${SEO_CONSTANTS.siteUrl}${SEO_CONSTANTS.ogImage}`,
	description: SEO_CONSTANTS.defaultDescription,
	sameAs: [
		"https://twitter.com/EliteTraderFund",
		"https://www.youtube.com/@EliteTraderFunding",
		"https://www.instagram.com/elitetraderfunding",
		"https://discord.gg/elitetraderfunding",
	],
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "customer service",
		url: `${SEO_CONSTANTS.siteUrl}/contact`,
	},
};

/**
 * WebSite schema with search action
 */
export const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SEO_CONSTANTS.siteUrl}/#website`,
	url: SEO_CONSTANTS.siteUrl,
	name: SEO_CONSTANTS.siteName,
	description: SEO_CONSTANTS.defaultDescription,
	publisher: {
		"@id": `${SEO_CONSTANTS.siteUrl}/#organization`,
	},
	inLanguage: "en-US",
};

/**
 * Service schema for funded trading evaluations
 */
export const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	"@id": `${SEO_CONSTANTS.siteUrl}/#service`,
	name: "Funded Trading Evaluations",
	description:
		"Trading evaluation programs that allow traders to prove their skills and receive funded trading accounts with real capital.",
	provider: {
		"@id": `${SEO_CONSTANTS.siteUrl}/#organization`,
	},
	serviceType: "Financial Services",
	areaServed: {
		"@type": "Place",
		name: "Worldwide",
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Trading Evaluations",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "1-Step Evaluation",
					description:
						"Single-phase evaluation to prove your trading skills and get funded",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Fast Track Evaluation",
					description: "Accelerated path to a funded trading account",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "End of Day Evaluation",
					description:
						"Evaluation with end-of-day drawdown rules for swing traders",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Static Evaluation",
					description: "Evaluation with static drawdown for consistent traders",
				},
			},
		],
	},
};

/**
 * FAQ schema for common questions
 */
export const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "What is Elite Trader Funding?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Elite Trader Funding is a proprietary trading firm that provides traders with funded accounts after they pass an evaluation. We offer various evaluation types including 1-Step, Fast Track, End of Day, and Static evaluations to match different trading styles.",
			},
		},
		{
			"@type": "Question",
			name: "How do I become a funded trader?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "To become a funded trader with Elite Trader Funding, you need to purchase an evaluation account, meet the profit target while following the trading rules, and upon passing, you'll receive a funded account with real capital to trade.",
			},
		},
		{
			"@type": "Question",
			name: "What are the payout terms?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Elite Trader Funding offers competitive payout splits. Funded traders can request payouts after meeting the minimum requirements, with fast processing times and multiple withdrawal options.",
			},
		},
		{
			"@type": "Question",
			name: "What trading platforms are supported?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Elite Trader Funding supports popular trading platforms including NinjaTrader, Tradovate, TradingView, and Rithmic-compatible platforms for futures trading.",
			},
		},
		{
			"@type": "Question",
			name: "Is there a time limit on evaluations?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Elite Trader Funding offers flexible evaluation periods. Check our evaluation options to find plans that match your trading pace and style.",
			},
		},
	],
};

/**
 * Breadcrumb schema generator
 */
export function generateBreadcrumbSchema(
	items: Array<{ name: string; url: string }>,
) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

/**
 * WebPage schema generator for individual pages
 */
export function generateWebPageSchema(options: {
	title: string;
	description: string;
	url: string;
	datePublished?: string;
	dateModified?: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${options.url}/#webpage`,
		url: options.url,
		name: options.title,
		description: options.description,
		isPartOf: {
			"@id": `${SEO_CONSTANTS.siteUrl}/#website`,
		},
		about: {
			"@id": `${SEO_CONSTANTS.siteUrl}/#organization`,
		},
		datePublished: options.datePublished || "2024-01-01",
		dateModified:
			options.dateModified || new Date().toISOString().split("T")[0],
		inLanguage: "en-US",
	};
}

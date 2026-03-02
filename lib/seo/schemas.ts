import { SEO_CONSTANTS } from "./constants";
import { cdn, images } from "@/lib/cdn";

export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${SEO_CONSTANTS.siteUrl}/#organization`,
	name: SEO_CONSTANTS.siteName,
	url: SEO_CONSTANTS.siteUrl,
	logo: {
		"@type": "ImageObject",
		url: cdn(images.brand.logo),
		width: 512,
		height: 512,
	},
	image: `${SEO_CONSTANTS.siteUrl}${SEO_CONSTANTS.ogImage}`,
	description: SEO_CONSTANTS.defaultDescription,
	sameAs: [
		"https://twitter.com/firstaborad",
	],
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "customer service",
		url: `${SEO_CONSTANTS.siteUrl}/contact`,
	},
	foundingDate: "2024",
	numberOfEmployees: {
		"@type": "QuantitativeValue",
		minValue: 10,
	},
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.9",
		ratingCount: "2500",
		bestRating: "5",
	},
};

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

export const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	"@id": `${SEO_CONSTANTS.siteUrl}/#application`,
	name: "Firstline Commission Platform",
	description:
		"The commission platform for sellers, agents, agencies, and affiliates. Split payments instantly, pay commissions in real-time, and scale globally.",
	applicationCategory: "BusinessApplication",
	operatingSystem: "Web",
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
		description: "Free to get started. No credit card required.",
	},
	provider: {
		"@id": `${SEO_CONSTANTS.siteUrl}/#organization`,
	},
	featureList: [
		"Real-time commission tracking",
		"Automated payment splitting",
		"Lifetime commission duration",
		"Multi-tier commission structures",
		"Real-time dashboard and analytics",
		"Global payout support",
	],
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.9",
		ratingCount: "2500",
		bestRating: "5",
	},
};

export const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "How secure is my data with Firstline?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Your data is protected with enterprise-grade security. We use end-to-end encryption, secure cloud infrastructure, and follow industry best practices to ensure your sales network and commission data remain safe and private.",
			},
		},
		{
			"@type": "Question",
			name: "Can I access Firstline on both mobile and desktop?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes! Firstline is fully responsive and works seamlessly across all devices. Access your dashboard, track commissions, and manage your sales network from anywhere - whether you're on your phone, tablet, or desktop.",
			},
		},
		{
			"@type": "Question",
			name: "What happens after my free trial?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "After your free trial ends, you can choose a plan that fits your needs. All your data and configurations will be preserved, so you can continue right where you left off with no interruption to your sales network.",
			},
		},
		{
			"@type": "Question",
			name: "How can I upgrade or downgrade my plan?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle. No long-term contracts required.",
			},
		},
		{
			"@type": "Question",
			name: "What if I forget my password?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Simply click the 'Forgot Password' link on the login page. We'll send you a secure reset link to your registered email address. You can also enable two-factor authentication for added security.",
			},
		},
	],
};

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

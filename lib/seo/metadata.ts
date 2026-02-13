import type { Metadata, Viewport } from "next";
import { SEO_CONSTANTS, SEO_KEYWORDS } from "@/lib/seo/constants";

/**
 * Default viewport configuration for Next.js 14+
 */
export const defaultViewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
	colorScheme: "light dark",
};

/**
 * Base metadata configuration
 */
export const baseMetadata: Metadata = {
	metadataBase: new URL(SEO_CONSTANTS.siteUrl),
	title: {
		default: SEO_CONSTANTS.defaultTitle,
		template: `%s | ${SEO_CONSTANTS.siteName}`,
	},
	description: SEO_CONSTANTS.defaultDescription,
	keywords: [
		...SEO_KEYWORDS.primary,
		...SEO_KEYWORDS.secondary,
		...SEO_KEYWORDS.longtail,
	],
	authors: [{ name: SEO_CONSTANTS.siteName, url: SEO_CONSTANTS.siteUrl }],
	creator: SEO_CONSTANTS.siteName,
	publisher: SEO_CONSTANTS.siteName,
	generator: "Next.js",
	applicationName: SEO_CONSTANTS.siteName,
	referrer: "origin-when-cross-origin",
	category: "finance",

	// Icons
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/icon.svg", type: "image/svg+xml" },
		],
		shortcut: "/favicon.ico",
		apple: [
			{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
		],
	},

	// Robots
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	// Alternates
	alternates: {
		canonical: SEO_CONSTANTS.siteUrl,
	},

	// Open Graph
	openGraph: {
		type: "website",
		title: SEO_CONSTANTS.defaultTitle,
		description: SEO_CONSTANTS.defaultDescription,
		url: SEO_CONSTANTS.siteUrl,
		siteName: SEO_CONSTANTS.siteName,
		locale: "en_US",
		images: [
			{
				url: SEO_CONSTANTS.ogImage,
				width: 1200,
				height: 630,
				alt: `${SEO_CONSTANTS.siteName} - Become a Funded Trader`,
				type: "image/png",
			},
		],
	},

	// Twitter
	twitter: {
		card: "summary_large_image",
		site: SEO_CONSTANTS.twitterHandle,
		creator: SEO_CONSTANTS.twitterHandle,
		title: SEO_CONSTANTS.defaultTitle,
		description: SEO_CONSTANTS.defaultDescription,
		images: [SEO_CONSTANTS.ogImage],
	},

	// Other
	other: {
		"format-detection": "telephone=no",
	},
};

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata(options: {
	title: string;
	description: string;
	path?: string;
	ogImage?: string;
	keywords?: string[];
	noIndex?: boolean;
}): Metadata {
	const url = options.path
		? `${SEO_CONSTANTS.siteUrl}${options.path}`
		: SEO_CONSTANTS.siteUrl;

	const ogImage = options.ogImage || SEO_CONSTANTS.ogImage;

	return {
		title: options.title,
		description: options.description,
		keywords: options.keywords
			? [
					...SEO_KEYWORDS.primary,
					...SEO_KEYWORDS.secondary,
					...SEO_KEYWORDS.longtail,
					...options.keywords,
				]
			: [
					...SEO_KEYWORDS.primary,
					...SEO_KEYWORDS.secondary,
					...SEO_KEYWORDS.longtail,
				],
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: `${options.title} | ${SEO_CONSTANTS.siteName}`,
			description: options.description,
			url,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: options.title,
				},
			],
		},
		twitter: {
			title: `${options.title} | ${SEO_CONSTANTS.siteName}`,
			description: options.description,
			images: [ogImage],
		},
		robots: options.noIndex
			? { index: false, follow: false }
			: { index: true, follow: true },
	};
}

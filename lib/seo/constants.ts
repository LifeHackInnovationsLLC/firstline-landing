export const SEO_CONSTANTS = {
	siteName: "Elite Trader Funding",
	siteUrl: "https://elitetraderfunding.app",
	defaultTitle: "Become A Funded Trader - Elite Trader Funding",
	defaultDescription:
		"We provide traders with an opportunity to earn funding based on their trading performance in an evaluation account. Start your funded trading journey today.",
	twitterHandle: "@EliteTraderFund",
	ogImage: "/brand/etf-og.png",
} as const;

export const SEO_KEYWORDS = {
	primary: [
		"funded trading",
		"prop firm",
		"funded trader",
		"trading evaluation",
		"futures trading",
		"Elite Trader Funding",
		"ETF prop firm",
		"trading capital",
		"prop trading firm",
		"funded trading account",
	],
	secondary: [
		"day trading",
		"swing trading",
		"trading challenge",
		"trading funding",
		"proprietary trading",
		"trader funding program",
		"futures prop firm",
		"trading account funding",
		"become a funded trader",
		"get funded to trade",
	],
	longtail: [
		"best prop firm for futures",
		"how to get funded as a trader",
		"trading evaluation account",
		"prop firm with no time limit",
		"futures trading funding",
		"trading payout",
		"prop firm payouts",
		"trading competitions",
		"trader rewards program",
	],
} as const;

export const ALL_KEYWORDS = [
	...SEO_KEYWORDS.primary,
	...SEO_KEYWORDS.secondary,
	...SEO_KEYWORDS.longtail,
];

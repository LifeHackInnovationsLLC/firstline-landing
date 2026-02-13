import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { WebSite, WithContext } from "schema-dts";

import { SEO_CONSTANTS } from "@/lib/seo/constants";
import { baseMetadata, defaultViewport } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const brittiSans = localFont({
  src: [
    {
      path: "../public/fonts/BrittiSansTrial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BrittiSansTrial-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

function getWebsiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONSTANTS.siteName,
    url: SEO_CONSTANTS.siteUrl,
  };
}

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, brittiSans.variable)} suppressHydrationWarning>
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}

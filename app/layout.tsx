import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { baseMetadata, defaultViewport } from "@/lib/seo/metadata";
import {
  faqSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from "@/lib/seo/schemas";
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

const jsonLdSchemas = [
  organizationSchema,
  websiteSchema,
  serviceSchema,
  faqSchema,
];

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, brittiSans.variable)}
      suppressHydrationWarning
    >
      <head>
        {jsonLdSchemas.map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML for script injection
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        ))}
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}

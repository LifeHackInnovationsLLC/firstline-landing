import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { baseMetadata, defaultViewport } from "@/lib/seo/metadata";
import {
  organizationSchema,
  websiteSchema,
  faqSchema,
  serviceSchema,
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
        {jsonLdSchemas.map((schema, i) => (
          <script
            key={`${schema["@type"]}-${i}`}
            type="application/ld+json"
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

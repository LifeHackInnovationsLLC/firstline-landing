"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/global/logo";
import { cn } from "@/lib/utils";
import footerGradient from "@/public/sections/footer/firstline-footer-gradient.webp";
import footerLogo from "@/public/sections/footer/firstline-footer.webp";

type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

const content = {
  description:
    "The commission platform for Sellers, Agencies, Affiliates and Creators. Split payments instantly, pay commissions in real-time, and scale globally.",
  sections: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Team", href: "/#team" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Who is it for", href: "/#audiences" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "For Sellers", href: "/for-sellers" },
        { label: "For Agencies", href: "/for-agencies" },
        { label: "For Affiliates", href: "/for-affiliates" },
        { label: "For Creators", href: "/for-creators" },
        { label: "What is Payment Processing?", href: "/payment-processing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Season 1", href: "/season-1" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Services", href: "/terms-of-service" },
      ],
    },
  ],
};

const currentYear = new Date().getFullYear();

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        "transition-transform duration-300",
        isOpen && "rotate-180",
      )}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterAccordion({ section }: { section: FooterSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="flex flex-col border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={toggle}
        className="flex items-center justify-between w-full py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-foreground">
          {section.title}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-2.5 pb-4">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function GradientDivider() {
  return (
    <svg
      className="w-full h-px"
      viewBox="0 0 1440 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M1456 0.584L-16 0.584"
        stroke="url(#footer-gradient)"
        strokeWidth="1.169"
      />
      <defs>
        <linearGradient
          id="footer-gradient"
          x1="-16"
          y1="1.592"
          x2="1456"
          y2="1.592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.5" stopColor="white" stopOpacity="0.12" />
          <stop stopColor="white" stopOpacity="0" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="relative flex flex-col">
      <Image
        src={footerGradient}
        alt=""
        className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
        aria-hidden="true"
        sizes="100vw"
      />
      <GradientDivider />
      <div className="container relative z-10 flex-1">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 py-12 lg:py-16">
          {/* Brand column */}
          <div className="flex flex-col gap-5 max-w-sm">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Link columns - Mobile accordion */}
          <div className="flex flex-col w-full lg:hidden">
            {content.sections.map((section) => (
              <FooterAccordion key={section.title} section={section} />
            ))}
          </div>

          {/* Link columns - Desktop */}
          <div className="hidden lg:flex flex-wrap gap-12 lg:gap-16">
            {content.sections.map((section) => (
              <div
                key={section.title}
                className="flex flex-col gap-4 min-w-[130px]"
              >
                <h5 className="text-sm font-semibold text-foreground">
                  {section.title}
                </h5>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <GradientDivider />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6">
          <span className="text-sm text-muted-foreground">
            &copy; {currentYear} Firstline Digital. All rights reserved.
          </span>
          <span className="text-sm text-muted-foreground">
            Made by:{" "}
            <a
              href="https://quick14.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground transition-colors hover:text-foreground/80"
            >
              Quick14
            </a>
          </span>
        </div>
      </div>
      <div className="container relative z-10">
        <Image
          src={footerLogo}
          alt="Firstline"
          className="w-full object-contain"
          sizes="100vw"
        />
      </div>
    </footer>
  );
}

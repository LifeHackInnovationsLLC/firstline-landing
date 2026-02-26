"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn, getHashAwareHref } from "@/lib/utils";

// ─── Types & Data ───────────────────────────────────────────

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}

const isExternalLink = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Team", href: "#team" },
  { label: "How it works", href: "#how-it-works" },
  {
    label: "Who is it for",
    href: "#",
    subItems: [
      { label: "For Sellers", href: "/sellers" },
      { label: "For Agencies", href: "/agencies" },
      { label: "For Affiliates", href: "/affiliates" },
      { label: "For Agents", href: "/agents" },
    ],
  },
];

// ─── Desktop NavLinks ───────────────────────────────────────

export function NavLinks({
  direction = "row",
  className,
  onLinkClick,
}: {
  direction?: "row" | "col";
  className?: string;
  onLinkClick?: () => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  // Close submenu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    if (openIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIndex]);

  // Close submenu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally reset when pathname changes
  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul
      ref={navRef}
      className={cn(
        "flex",
        direction === "col"
          ? "flex-col items-start"
          : "flex-row items-center gap-8 py-2 px-6 rounded-full border border-white/[0.04] bg-white/[0.04]",
        className,
      )}
    >
      {NAV_LINKS.map((item, index) => {
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const isOpen = openIndex === index;

        // ── Row (desktop) ──
        if (direction === "row") {
          return (
            <li key={item.label} className="relative">
              {hasSubItems ? (
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm font-light text-white transition-colors hover:text-white/80"
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "size-3 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={getHashAwareHref(item.href, pathname, "/")}
                  className="text-sm font-light text-white transition-colors hover:text-white/80"
                  onClick={onLinkClick}
                >
                  {item.label}
                </Link>
              )}

              {/* Desktop dropdown */}
              {hasSubItems && (
                <div
                  className={cn(
                    "absolute left-1/2 top-full z-10 mt-4 -translate-x-1/2 min-w-[160px] rounded-xl border border-border bg-card px-2 py-3 shadow-lg transition-all duration-200",
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0",
                  )}
                >
                  <ul className="flex flex-col gap-1">
                    {item.subItems?.map((sub) => (
                      <li key={sub.label}>
                        {isExternalLink(sub.href) ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-white"
                            onClick={() => {
                              setOpenIndex(null);
                              onLinkClick?.();
                            }}
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            href={getHashAwareHref(sub.href, pathname, "/")}
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-white"
                            onClick={() => {
                              setOpenIndex(null);
                              onLinkClick?.();
                            }}
                          >
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        }

        // ── Col (mobile) ──
        return (
          <li key={item.label} className="w-full">
            {hasSubItems ? (
              <div className="flex flex-col">
                <button
                  type="button"
                  className="flex items-center gap-2 text-2xl font-light text-muted-foreground transition-colors hover:text-white"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-5 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <ul className="flex flex-col gap-3 overflow-hidden min-h-0 pt-3">
                    {item.subItems?.map((sub) => (
                      <li key={sub.label}>
                        {isExternalLink(sub.href) ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block pl-4 text-lg font-light text-muted-foreground transition-colors hover:text-white"
                            onClick={() => {
                              setOpenIndex(null);
                              onLinkClick?.();
                            }}
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            href={getHashAwareHref(sub.href, pathname, "/")}
                            className="block pl-4 text-lg font-light text-muted-foreground transition-colors hover:text-white"
                            onClick={() => {
                              setOpenIndex(null);
                              onLinkClick?.();
                            }}
                          >
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                href={getHashAwareHref(item.href, pathname, "/")}
                className="text-2xl font-light text-muted-foreground transition-colors hover:text-white"
                onClick={onLinkClick}
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

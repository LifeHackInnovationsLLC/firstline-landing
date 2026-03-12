"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLinks } from "./nav-links";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Burger button */}
      <Button
        className="lg:hidden relative z-50 text-white rounded-[4px]"
        style={{
          background: "linear-gradient(162.92deg, #1C1C1C 0%, #0D0D0D 100%)",
          boxShadow:
            "0px 11.6873px 23.2577px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255,255,255,0.15)",
        }}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggle}
      >
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-4"
        >
          <rect
            x="0"
            y="0"
            width="18"
            height="2"
            rx="1"
            fill="currentColor"
            className={cn(
              "origin-center transition-transform duration-300",
              isOpen && "translate-y-[6px] rotate-45",
            )}
            style={{ transformBox: "fill-box" }}
          />
          <rect
            x="0"
            y="6"
            width="18"
            height="2"
            rx="1"
            fill="currentColor"
            className={cn(
              "transition-opacity duration-300",
              isOpen && "opacity-0",
            )}
          />
          <rect
            x="0"
            y="12"
            width="18"
            height="2"
            rx="1"
            fill="currentColor"
            className={cn(
              "origin-center transition-transform duration-300",
              isOpen && "-translate-y-[6px] -rotate-45",
            )}
            style={{ transformBox: "fill-box" }}
          />
        </svg>
      </Button>

      {/* Mobile overlay */}
      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={cn(
          "absolute top-[var(--navbar-height)] left-0 w-full h-[calc(100dvh-var(--navbar-height))] bg-gradient-to-b from-background to-background/80 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col justify-between h-full py-8 px-5">
          <NavLinks
            direction="col"
            onLinkClick={close}
            className="items-start gap-6"
          />
          <div className="flex flex-col gap-4">
            <Button
              variant="ghost"
              nativeButton={false}
              render={<Link href="/sign-in" prefetch={false} />}
            >
              Sign in
            </Button>
            <Button
              variant="primary"
              nativeButton={false}
              render={<Link href="/get-started" prefetch={false} />}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

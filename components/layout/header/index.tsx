"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.05);
  });

  return (
    <header
      className={cn(
        "fixed flex items-center inset-0 z-50 h-(--navbar-height) transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="container flex items-center">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <Logo />
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex">
          <NavLinks direction="row" />
        </div>

        {/* Right side: auth buttons + mobile menu */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <div className="hidden lg:flex items-center gap-3">
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
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { Logo } from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="fixed flex items-center inset-0 z-50 h-(--navbar-height) bg-black/80 backdrop-blur-md border-b border-white/5">
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
              render={<Link href="/sign-in" />}
            >
              Sign in
            </Button>
            <Button
              variant="primary"
              nativeButton={false}
              render={<Link href="/get-started" />}
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

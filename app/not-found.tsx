"use client";

import Link from "next/link";
import { Logo } from "@/components/global/logo";
import { APP_LOGIN_URL } from "@/lib/app-links";

export default function NotFound() {
  const goBack = () => {
    if (typeof window === "undefined") return;
    if (window.history.length > 1) window.history.back();
    else window.location.href = "/";
  };

  return (
    <main
      className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 text-center"
      style={{
        backgroundImage: "radial-gradient(#11111B 1px, transparent 1px)",
        backgroundSize: "8px 8px",
      }}
    >
      <div className="mb-12">
        <Logo />
      </div>

      <div className="mb-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#9C8AFF]">
        Page not found
      </div>
      <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight mb-4 max-w-xl">
        This one took a wrong turn
      </h1>
      <p className="text-white/60 max-w-md mb-10 text-base sm:text-lg">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:w-auto sm:max-w-none">
        <button
          onClick={goBack}
          className="w-full sm:w-auto px-7 py-3 rounded-lg font-medium text-white transition-transform active:scale-[0.98] bg-[linear-gradient(180deg,#654AF7_-41.25%,#412CB6_111.25%)] shadow-[0px_1px_0px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
        >
          ← Go back
        </button>
        <Link
          href="/"
          className="w-full sm:w-auto px-7 py-3 rounded-lg font-medium text-white border border-white/15 hover:bg-white/5 transition-colors"
        >
          Back to home
        </Link>
        <a
          href={APP_LOGIN_URL}
          className="w-full sm:w-auto px-7 py-3 rounded-lg font-medium text-white/70 hover:text-white transition-colors"
        >
          Sign in
        </a>
      </div>
    </main>
  );
}

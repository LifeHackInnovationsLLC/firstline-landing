// TEMPORARY BUILD-INFO BADGE — remove before production
//
// This component exists ONLY to make the three concurrent static instances
// (production / staging / develop) visually distinguishable while the
// multi-instance deploy pipeline is being validated. It renders a small,
// fixed, non-interactive pill in the bottom-right corner of every page.
//
// All values come from NEXT_PUBLIC_* env vars that Next inlines at BUILD
// time (required: this is a `output: 'export'` static export — there is no
// runtime to read process.env, so the literal strings are baked into the
// emitted HTML/JS by the Dockerfile's `. ./deploy.env` + build-time stamp).
//
// To remove later: delete this file and its <BuildInfoBadge /> usage in
// app/layout.tsx. Both are greppable via `data-temp-badge` and the
// "TEMPORARY BUILD-INFO BADGE" marker comment.
"use client";

export function BuildInfoBadge() {
  // Inlined at build time for the static export. Fallbacks keep the badge
  // sane for local `pnpm dev` / `pnpm build` where deploy.env isn't sourced.
  const branch = process.env.NEXT_PUBLIC_DEPLOY_BRANCH || "local";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "(none)";
  const builtAt = process.env.NEXT_PUBLIC_BUILD_TIME || "dev";

  return (
    <div
      data-temp-badge="firstline-landing-build-info"
      aria-hidden="true"
      style={{
        position: "fixed",
        bottom: 8,
        right: 8,
        zIndex: 2147483647,
        pointerEvents: "none",
        background: "rgba(13, 17, 23, 0.92)",
        color: "#e6edf3",
        font: "500 12px/1.4 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        padding: "5px 10px",
        borderRadius: 9999,
        border: "1px solid rgba(230, 237, 243, 0.18)",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.4)",
        maxWidth: "92vw",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {`firstline-landing · ${branch} · ${basePath} · built ${builtAt}`}
    </div>
  );
}

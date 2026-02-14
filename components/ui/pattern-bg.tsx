import { cn } from "@/lib/utils";

interface PatternBgProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function PatternBg({ className, ...props }: PatternBgProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 z-0 h-[calc(100%+var(--navbar-height))]",
        className,
      )}
      aria-hidden="true"
      {...props}
    >
      {/* Dot pattern with fade */}
      <div className="absolute inset-0 bg-[radial-gradient(#11111B_1px,transparent_1px)] bg-size-[8px_8px] mask-[linear-gradient(to_bottom,#000_50%,transparent_100%)]" />
      {/* Purple gradient glow */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/decorations/purple-gradient-mask.webp"
        alt=""
        className="absolute top-0 left-0"
        draggable={false}
      />
    </div>
  );
}

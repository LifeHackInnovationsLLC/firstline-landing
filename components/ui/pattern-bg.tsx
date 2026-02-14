import { cn } from "@/lib/utils";

interface PatternBgProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function PatternBg({ className, ...props }: PatternBgProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-[calc(-1*var(--navbar-height))] z-0 h-[calc(100%+var(--navbar-height))] bg-[radial-gradient(#11111B_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]",
        className,
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

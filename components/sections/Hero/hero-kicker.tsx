import { cn } from "@/lib/utils";
import { PayoutIcon } from "./svgs";

interface HeroKickerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function HeroKicker({ className, children, ...props }: HeroKickerProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <PayoutIcon />
      <span className="text-green font-sans text-sm font-medium">
        {children}
      </span>
    </div>
  );
}

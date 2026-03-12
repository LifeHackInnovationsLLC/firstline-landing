import { cn } from "@/lib/utils";

interface TrainingCardBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top-left" | "top-right";
}

export function TrainingCardBadge({
  position = "top-left",
  className,
  children,
  ...props
}: TrainingCardBadgeProps) {
  return (
    <div
      className={cn(
        "absolute top-6 px-4 py-2 rounded-full text-sm text-white font-medium",
        "bg-linear-to-br from-white/12 to-white/4 shadow-[0px_12px_23px_rgba(0,0,0,0.25)] backdrop-blur-[80px]",
        position === "top-left" && "left-4",
        position === "top-right" && "right-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

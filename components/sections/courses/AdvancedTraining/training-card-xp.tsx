import { cn } from "@/lib/utils";

interface TrainingCardXpProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export function TrainingCardXp({
  className,
  children,
  ...props
}: TrainingCardXpProps) {
  return (
    <span
      className={cn("text-xs text-green font-medium", className)}
      {...props}
    >
      {children}
    </span>
  );
}

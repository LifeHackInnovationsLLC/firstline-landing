import { cn } from "@/lib/utils";

interface TrainingCardSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export function TrainingCardSubtitle({
  className,
  children,
  ...props
}: TrainingCardSubtitleProps) {
  return (
    <p className={cn("text-xs text-white/60", className)} {...props}>
      {children}
    </p>
  );
}

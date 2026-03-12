import { cn } from "@/lib/utils";

interface TrainingCardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export function TrainingCardDescription({
  className,
  children,
  ...props
}: TrainingCardDescriptionProps) {
  return (
    <p className={cn("text-base text-white/60", className)} {...props}>
      {children}
    </p>
  );
}

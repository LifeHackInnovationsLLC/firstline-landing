import { cn } from "@/lib/utils";

interface TrainingCardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function TrainingCardImage({
  className,
  children,
  ...props
}: TrainingCardImageProps) {
  return (
    <div className={cn("relative h-35 md:h-62.5", className)} {...props}>
      {children}
    </div>
  );
}

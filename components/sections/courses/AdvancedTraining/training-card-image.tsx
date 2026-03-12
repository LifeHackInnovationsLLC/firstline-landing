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
    <div className={cn("relative h-[250px]", className)} {...props}>
      {children}
    </div>
  );
}

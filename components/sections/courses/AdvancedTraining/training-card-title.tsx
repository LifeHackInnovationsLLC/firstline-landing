import { cn } from "@/lib/utils";

interface TrainingCardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function TrainingCardTitle({
  className,
  children,
  ...props
}: TrainingCardTitleProps) {
  return (
    <h3
      className={cn("text-white text-lg font-semibold", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

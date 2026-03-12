import { cn } from "@/lib/utils";

interface TrainingCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function TrainingCardHeader({
  className,
  children,
  ...props
}: TrainingCardHeaderProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

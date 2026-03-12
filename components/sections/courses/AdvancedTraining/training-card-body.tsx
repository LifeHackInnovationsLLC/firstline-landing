import { cn } from "@/lib/utils";

interface TrainingCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function TrainingCardBody({
  className,
  children,
  ...props
}: TrainingCardBodyProps) {
  return (
    <div className={cn("mt-6", className)} {...props}>
      {children}
    </div>
  );
}

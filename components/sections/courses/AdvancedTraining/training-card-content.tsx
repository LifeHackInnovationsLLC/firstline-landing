import { cn } from "@/lib/utils";

interface TrainingCardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function TrainingCardContent({
  className,
  children,
  ...props
}: TrainingCardContentProps) {
  return (
    <div
      className={cn("flex flex-col flex-1 px-5 py-4 md:px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

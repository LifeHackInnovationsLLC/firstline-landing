import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}
export function SectionTitle({
  children,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <h2 className={cn("text-sans-lg md:text-sans-3xl", className)} {...props}>
      {children}
    </h2>
  );
}

interface SectionIntroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function SectionIntroBadge({
  children,
  className,
  ...props
}: SectionIntroBadgeProps) {
  return (
    <div
      className={cn(
        "bg-foreground/8 border-x border-foreground w-fit py-px px-2",
        className
      )}
      {...props}
    >
      <span className="text-sm font-mono text-foreground uppercase">
        {children}
      </span>
    </div>
  );
}

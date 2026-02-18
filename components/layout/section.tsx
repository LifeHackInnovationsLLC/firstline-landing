import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  as?: "section" | "div";
}

export function Section({
  children,
  className,
  as: Tag = "section",
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "pt-10 lg:pt-20 pb-10 lg:pb-20",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

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

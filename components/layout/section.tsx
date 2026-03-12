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
    <Tag className={cn("pt-10 lg:pt-20 pb-10 lg:pb-20", className)} {...props}>
      {children}
    </Tag>
  );
}

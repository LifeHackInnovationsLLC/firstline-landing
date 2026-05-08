import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TrainingCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function TrainingCardFooter({
  className,
  children,
  ...props
}: TrainingCardFooterProps) {
  return (
    <div
      className={cn(
        "mt-auto pt-5 md:pt-6 flex flex-wrap items-center gap-3 md:gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface TrainingCardActionProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TrainingCardAction({
  href,
  children,
  className,
}: TrainingCardActionProps) {
  return (
    <Button
      nativeButton={false}
      variant="dark"
      className={className}
      render={<Link href={href} />}
    >
      {children}
      <svg
        className="size-3 ml-1"
        width="8"
        height="9"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 3.59955C8.16667 3.98445 8.16667 4.9467 7.5 5.3316L1.5 8.7957C0.833334 9.1806 -4.47338e-07 8.69948 -4.13689e-07 7.92968L-1.10848e-07 1.00147C-7.71986e-08 0.231674 0.833333 -0.249451 1.5 0.135449L7.5 3.59955Z"
          fill="white"
        />
      </svg>
    </Button>
  );
}

interface TrainingCardDurationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function TrainingCardDuration({
  className,
  children,
  ...props
}: TrainingCardDurationProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-sm text-white/60",
        className,
      )}
      {...props}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99967 13.3333C9.41416 13.3333 10.7707 12.7713 11.7709 11.7712C12.7711 10.771 13.333 9.41441 13.333 7.99992C13.333 6.58543 12.7711 5.22888 11.7709 4.22868C10.7707 3.22849 9.41416 2.66659 7.99967 2.66659C6.58519 2.66659 5.22863 3.22849 4.22844 4.22868C3.22824 5.22888 2.66634 6.58543 2.66634 7.99992C2.66634 9.41441 3.22824 10.771 4.22844 11.7712C5.22863 12.7713 6.58519 13.3333 7.99967 13.3333ZM7.99967 1.33325C8.87515 1.33325 9.74206 1.50569 10.5509 1.84072C11.3597 2.17575 12.0947 2.66682 12.7137 3.28587C13.3328 3.90493 13.8238 4.63986 14.1589 5.4487C14.4939 6.25753 14.6663 7.12444 14.6663 7.99992C14.6663 9.76803 13.964 11.4637 12.7137 12.714C11.4635 13.9642 9.76778 14.6666 7.99967 14.6666C4.31301 14.6666 1.33301 11.6666 1.33301 7.99992C1.33301 6.23181 2.03539 4.53612 3.28563 3.28587C4.53587 2.03563 6.23156 1.33325 7.99967 1.33325ZM8.33301 4.66658V8.16658L11.333 9.94658L10.833 10.7666L7.33301 8.66658V4.66658H8.33301Z"
          fill="#51C9C2"
        />
      </svg>
      {children}
    </div>
  );
}

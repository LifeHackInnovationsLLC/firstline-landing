import { cn } from "@/lib/utils";
import Link from "next/link";
import { cdn, images } from "@/lib/cdn";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <img
        src={cdn(images.brand.logo, { width: 240 })}
        srcSet={`${cdn(images.brand.logo, { width: 120 })} 1x, ${cdn(images.brand.logo, { width: 240 })} 2x`}
        alt="Firstline"
        width={120}
        height={28}
      />
    </Link>
  );
}

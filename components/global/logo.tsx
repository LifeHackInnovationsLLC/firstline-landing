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
        src={`https://res.cloudinary.com/deoxevgc6/image/upload/${images.brand.logo}`}
        alt="Firstline"
        width={120}
        height={28}
      />
    </Link>
  );
}

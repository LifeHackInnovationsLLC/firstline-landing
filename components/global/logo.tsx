import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/cdn";
import { cn } from "@/lib/utils";

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
      <Image
        src={`https://res.cloudinary.com/deoxevgc6/image/upload/${images.brand.logo}`}
        alt="Firstline"
        width={360}
        height={84}
        className="h-7 w-auto"
        unoptimized
      />
    </Link>
  );
}

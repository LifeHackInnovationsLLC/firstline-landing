import Image from "next/image";
import Link from "next/link";
import { cdn, images } from "@/lib/cdn";
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
        src={cdn(images.brand.logo, { width: 960, quality: "100" })}
        alt="Firstline"
        width={480}
        height={113}
        className="h-7 w-auto"
        unoptimized
      />
    </Link>
  );
}

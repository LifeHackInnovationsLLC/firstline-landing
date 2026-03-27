"use client";

import Image from "next/image";
import { getRandomUserPortraitUrl } from "@/lib/randomuser-portrait";
import { cn } from "@/lib/utils";

type AutoAvatarProps = {
  name: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
};

export function AutoAvatar({
  name,
  width,
  height,
  className,
  sizes,
  priority,
  alt,
}: AutoAvatarProps) {
  return (
    <Image
      src={getRandomUserPortraitUrl(name)}
      alt={alt ?? name}
      width={width}
      height={height}
      className={cn("rounded-full object-cover", className)}
      unoptimized
      sizes={sizes}
      priority={priority}
    />
  );
}

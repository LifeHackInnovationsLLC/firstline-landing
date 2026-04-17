import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { FadeIn } from "@/components/ui/reveal";

interface PageHeroCta {
  label: string;
  href: string;
  variant: "primary" | "dark" | "green" | "ghost" | "glass";
  icon?: React.ReactNode;
}

interface PageHeroProps {
  id: string;
  kicker?: React.ReactNode;
  title: string;
  description: string;
  descriptionClassName?: string;
  ctas: PageHeroCta[];
  maxWidth?: string;
  bgImage?: {
    src: string;
    mobileSrc?: string;
    alt: string;
    width: number;
    height: number;
    mobileWidth?: number;
    mobileHeight?: number;
  };
  align?: "center" | "bottom";
  className?: string;
}

export function PageHero({
  id,
  kicker,
  title,
  description,
  descriptionClassName = "text-white/72 text-sm lg:text-base max-w-lg",
  ctas,
  maxWidth = "max-w-2xl",
  bgImage,
  align = "center",
  className,
}: PageHeroProps) {
  const isBottom = align === "bottom";
  return (
    <Section
      id={id}
      className={`${className ?? ""}${isBottom ? " flex flex-col" : ""}`}
    >
      {bgImage && (
        <>
          {bgImage.mobileSrc && (
            <Image
              src={bgImage.mobileSrc}
              alt={bgImage.alt}
              width={bgImage.mobileWidth ?? bgImage.width}
              height={bgImage.mobileHeight ?? bgImage.height}
              priority
              sizes="100vw"
              className="absolute inset-0 w-full h-full object-cover lg:hidden"
            />
          )}
          <Image
            src={bgImage.src}
            alt={bgImage.alt}
            width={bgImage.width}
            height={bgImage.height}
            priority
            sizes="100vw"
            className={`absolute inset-0 w-full h-full object-cover${bgImage.mobileSrc ? " hidden lg:block" : ""}`}
          />
        </>
      )}
      <div
        className={`${bgImage ? "container relative z-10" : "container"}${isBottom ? " flex flex-col flex-1 justify-end" : ""}`}
      >
        <div
          className={`flex flex-col gap-8 lg:gap-11 ${maxWidth} mx-auto items-center text-center ${isBottom ? "pb-10 lg:pb-20" : "pt-10 lg:pt-20"}`}
        >
          <div className="flex flex-col gap-4 items-center">
            {kicker && <FadeIn>{kicker}</FadeIn>}
            <FadeIn delay={0.05}>
              <Heading as="h1" align="center">
                {title}
              </Heading>
            </FadeIn>
            <FadeIn delay={0.1} as="p" className={descriptionClassName}>
              {description}
            </FadeIn>
          </div>
          <FadeIn
            delay={0.15}
            className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                className="w-full justify-center sm:w-auto"
                nativeButton={false}
                variant={cta.variant}
                render={<Link href={cta.href} />}
              >
                {cta.label}
                {cta.icon}
              </Button>
            ))}
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}

import { cn } from "@/lib/utils";
import Image from "next/image";
import whySwitchIcon1 from "@/public/sections/why-switch/why-switch-icon-1.png";
import whySwitchIcon2 from "@/public/sections/why-switch/why-switch-icon-2.png";
import whySwitchIcon3 from "@/public/sections/why-switch/why-switch-icon-3.png";
import whySwitchIcon4 from "@/public/sections/why-switch/why-switch-icon-4.png";

const content = [
  {
    title: `No "trust me, I'll pay you later"`,
    icon: whySwitchIcon1,
  },
  {
    title: "No manual commission calculations",
    icon: whySwitchIcon2,
  },
  {
    title: "No Spreadsheet Chaos",
    icon: whySwitchIcon3,
  },
  {
    title: "No payout excuses",
    icon: whySwitchIcon4,
  },
];

export function WhySwitchList() {
  return (
    <WhySwitchGrid>
      {content.map((item) => (
        <WhySwitchItem key={item.title} className="flex-1">
          <WhySwitchIcon src={item.icon} alt={item.title} />
          <WhySwitchTitle>{item.title}</WhySwitchTitle>
        </WhySwitchItem>
      ))}
    </WhySwitchGrid>
  );
}

interface WhySwitchGridProps extends React.HTMLAttributes<HTMLDivElement> {}

function WhySwitchGrid({ className, children, ...props }: WhySwitchGridProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-start justify-start gap-8 [--why-switch-icon-size:3rem] [--why-switch-title-max-width:16.25rem]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface WhySwitchItemProps extends React.HTMLAttributes<HTMLDivElement> {}

function WhySwitchItem({ className, children, ...props }: WhySwitchItemProps) {
  return (
    <div
      className={cn("flex flex-col items-start gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface WhySwitchIconProps extends React.ComponentProps<typeof Image> {}

function WhySwitchIcon({ className, alt, ...props }: WhySwitchIconProps) {
  return (
    <Image
      width={48}
      height={48}
      className={cn("size-(--why-switch-icon-size)", className)}
      alt={alt}
      {...props}
    />
  );
}

interface WhySwitchTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function WhySwitchTitle({
  className,
  children,
  ...props
}: WhySwitchTitleProps) {
  return (
    <p
      className={cn(
        "text-lg text-text-primary font-semibold text-left max-w-(--why-switch-title-max-width)",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

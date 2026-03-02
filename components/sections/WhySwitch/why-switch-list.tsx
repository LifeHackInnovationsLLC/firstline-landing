import { cn } from "@/lib/utils";
import { cdn, images } from "@/lib/cdn";

const content = [
  {
    title: `No "trust me, I'll pay you later"`,
    icon: images.whySwitch.icon1,
  },
  {
    title: "No manual commission calculations",
    icon: images.whySwitch.icon2,
  },
  {
    title: "No Spreadsheet Chaos",
    icon: images.whySwitch.icon3,
  },
  {
    title: "No payout excuses",
    icon: images.whySwitch.icon4,
  },
];

export function WhySwitchList() {
  return (
    <WhySwitchGrid>
      {content.map((item) => (
        <WhySwitchItem key={item.title} className="flex-1">
          <WhySwitchIcon src={cdn(item.icon, { width: 96 })} alt={item.title} />
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
        "flex flex-col lg:flex-row items-start justify-start lg:gap-8 [--why-switch-icon-size:2.5rem] lg:[--why-switch-icon-size:3rem] [--why-switch-title-max-width:100%] lg:[--why-switch-title-max-width:16.25rem]",
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

interface WhySwitchIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function WhySwitchIcon({ className, alt, ...props }: WhySwitchIconProps) {
  return (
    <img
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

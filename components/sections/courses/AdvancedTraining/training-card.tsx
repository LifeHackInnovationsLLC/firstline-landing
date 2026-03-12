import Image from "next/image";
import { cdn, images } from "@/lib/cdn";
import { cn } from "@/lib/utils";

interface TrainingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function TrainingCard({
  className,
  children,
  ...props
}: TrainingCardProps) {
  return (
    <div
      className={cn(
        "relative bg-card-dark rounded-[18px] overflow-hidden",
        className,
      )}
      {...props}
    >
      <Image
        src={cdn(images.courses.trainingCardBg)}
        alt=""
        fill
        className="object-cover pointer-events-none"
      />
      <div className="relative flex flex-col h-full">{children}</div>
    </div>
  );
}

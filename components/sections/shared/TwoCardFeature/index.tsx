import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn } from "@/lib/cdn";

interface TwoCardFeatureCard {
  icon: string;
  bg: string;
  title: string;
  subtitle: string;
  description?: string;
  items: string[];
  bullet: React.ReactNode;
  footerText?: string;
  footerColor?: string;
}

interface TwoCardFeatureProps {
  id?: string;
  title: string;
  cards: TwoCardFeatureCard[];
  className?: string;
}

export function TwoCardFeature({
  id,
  title,
  cards,
  className,
}: TwoCardFeatureProps) {
  return (
    <Section id={id} className={`bg-gray ${className ?? ""}`}>
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Heading as="h2" align="center" className="text-black text-balance">
            {title}
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:mt-15">
            {cards.map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-3xl p-5 lg:p-7"
              >
                <Image
                  src={cdn(card.bg)}
                  alt=""
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="relative z-10 flex flex-col">
                  <div className="flex flex-col gap-2">
                    <Image
                      src={cdn(card.icon, { width: 112 })}
                      alt={card.title}
                      width={56}
                      height={56}
                      unoptimized
                    />
                    <div
                      className={`flex flex-col gap-2 ${card.description ? "" : "mt-4"}`}
                    >
                      <h3 className="text-white text-2xl font-semibold">
                        {card.title}
                      </h3>
                      <p className="text-white/60 text-sm font-semibold">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col ${card.description ? "gap-8" : ""} mt-6`}
                  >
                    {card.description && (
                      <p className="text-white/60 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    )}
                    <ul className="flex flex-col gap-3">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="flex flex-row items-center gap-3 text-white/80 text-sm"
                        >
                          {card.bullet}
                          {item}
                        </li>
                      ))}
                    </ul>
                    {card.footerText && (
                      <p
                        className={`text-sm font-medium whitespace-pre-line mt-6 ${card.footerColor ?? ""}`}
                      >
                        {card.footerText}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

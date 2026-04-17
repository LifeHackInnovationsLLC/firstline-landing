import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

const content = {
  title: "What you get\nas a Firstline Seller?",
  items: [
    {
      title: "Split at Acceptance",
      description:
        "Commission splits happen at the payment level - not after reconciliation, not after accounting, but instantly at sale.",
      image: images.affiliates.bento1,
    },
    {
      title: "Full Visibility",
      description:
        "See every transaction, every commission, every split in real-time. No more wondering if you're getting what you're owed.",
      image: images.affiliates.bento2,
    },
    {
      title: "Instant Settlement",
      description:
        "Your commission hits your Firstline balance immediately. No 30-day holds, no net-60 terms, no excuses.",
      image: images.affiliates.bento3,
    },
    {
      title: "Trusted Provider",
      description:
        "Firstline Payments is a regulated payment service provider. Your earnings aren't just promised, they're protected.",
      image: images.affiliates.bento4,
    },
    {
      title: "Build Your Downline",
      description:
        "Create multiple levels of commissions, share with colleagues, and track every referral in your network.",
      image: images.affiliates.bento5,
    },
    {
      title: "Your Money, Your Way",
      description:
        "Hold balances, cash out via bank transfer, card, or hundreds of other methods. You control your earnings.",
      image: images.affiliates.bento6,
    },
  ],
};

export function AffiliatesBento() {
  return (
    <Section id="affiliates-bento" className="bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Reveal>
            <Heading as="h2" align="center" className="text-black text-balance">
              {content.title}
            </Heading>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 lg:mt-15">
            {content.items.map((item) => (
              <StaggerItem
                key={item.title}
                className="relative flex flex-col justify-end h-[280px] md:h-[356px] p-5 bg-card-dark overflow-hidden rounded-4xl"
              >
                <Image
                  src={cdn(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import bentoImage1 from "@/public/sections/affiliates/affiliates-bento-1.webp";
import bentoImage2 from "@/public/sections/affiliates/affiliates-bento-2.webp";
import bentoImage3 from "@/public/sections/affiliates/affiliates-bento-3.webp";
import bentoImage4 from "@/public/sections/affiliates/affiliates-bento-4.webp";
import bentoImage5 from "@/public/sections/affiliates/affiliates-bento-5.webp";
import bentoImage6 from "@/public/sections/affiliates/affiliates-bento-6.webp";

const content = {
  title: "What you get\nas a Firstline Seller?",
  items: [
    {
      title: "Split at Acceptance",
      description:
        "Commission splits happen at the payment level - not after reconciliation, not after accounting, but instantly at sale.",
      image: bentoImage1,
    },
    {
      title: "Full Visibility",
      description:
        "See every transaction, every commission, every split in real-time. No more wondering if you're getting what you're owed.",
      image: bentoImage2,
    },
    {
      title: "Instant Settlement",
      description:
        "Your commission hits your Firstline balance immediately. No 30-day holds, no net-60 terms, no excuses.",
      image: bentoImage3,
    },
    {
      title: "Trusted Provider",
      description:
        "Firstline Payments is a regulated payment service provider. Your earnings are protected, not promised.",
      image: bentoImage4,
    },
    {
      title: "Build Your Downline",
      description:
        "Create multiple levels of commissions, share with colleagues, and track every referral in your network.",
      image: bentoImage5,
    },
    {
      title: "Your Money, Your Way",
      description:
        "Hold balances, cash out via bank transfer, card, or hundreds of other methods. You control your earnings.",
      image: bentoImage6,
    },
  ],
};

export function AffiliatesBento() {
  return (
    <Section id="affiliates-bento" className="py-20 bg-gray">
      <div className="container">
        <Heading as="h2" className="text-black text-center text-balance">
          {content.title}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-15">
          {content.items.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col justify-end h-[356px] p-5 bg-card-dark overflow-hidden rounded-4xl"
            >
              <Image
                fill
                src={item.image}
                alt={item.title}
                className="object-cover"
              />
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

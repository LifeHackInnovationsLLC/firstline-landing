import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";

function GreenBullet() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_160_1536)">
        <rect width="12" height="12" rx="6" fill="#131418" />
        <g filter="url(#filter0_f_160_1536)">
          <ellipse
            cx="5.875"
            cy="28"
            rx="15.375"
            ry="26"
            transform="rotate(-180 5.875 28)"
            fill="#368F8A"
          />
        </g>
        <g
          filter="url(#filter1_f_160_1536)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <circle cx="6" cy="14.75" r="4.5" fill="white" fillOpacity="0.24" />
        </g>
      </g>
      <rect
        x="0.25"
        y="0.25"
        width="11.5"
        height="11.5"
        rx="5.75"
        stroke="url(#paint0_linear_160_1536)"
        strokeWidth="0.5"
      />
      <defs>
        <filter
          id="filter0_f_160_1536"
          x="-43.075"
          y="-31.575"
          width="97.9"
          height="119.15"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="16.7875"
            result="effect1_foregroundBlur_160_1536"
          />
        </filter>
        <filter
          id="filter1_f_160_1536"
          x="-4.6"
          y="4.15"
          width="21.2"
          height="21.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.05"
            result="effect1_foregroundBlur_160_1536"
          />
        </filter>
        <linearGradient
          id="paint0_linear_160_1536"
          x1="6"
          y1="0"
          x2="6"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id="clip0_160_1536">
          <rect width="12" height="12" rx="6" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PurpleBullet() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_160_1580)">
        <path
          d="M0 6C0 2.68629 2.68629 0 6 0V0C9.31371 0 12 2.68629 12 6V6C12 9.31371 9.31371 12 6 12V12C2.68629 12 0 9.31371 0 6V6Z"
          fill="#131418"
        />
        <g filter="url(#filter0_f_160_1580)">
          <ellipse
            cx="5.875"
            cy="28"
            rx="15.375"
            ry="26"
            transform="rotate(-180 5.875 28)"
            fill="#6363B1"
          />
        </g>
        <g
          filter="url(#filter1_f_160_1580)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <circle cx="6" cy="14.75" r="4.5" fill="white" fillOpacity="0.24" />
        </g>
      </g>
      <path
        d="M6 0.25C9.17564 0.25 11.75 2.82436 11.75 6C11.75 9.17564 9.17564 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6C0.25 2.82436 2.82436 0.25 6 0.25Z"
        stroke="url(#paint0_linear_160_1580)"
        strokeWidth="0.5"
      />
      <defs>
        <filter
          id="filter0_f_160_1580"
          x="-43.075"
          y="-31.575"
          width="97.9"
          height="119.15"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="16.7875"
            result="effect1_foregroundBlur_160_1580"
          />
        </filter>
        <filter
          id="filter1_f_160_1580"
          x="-4.6"
          y="4.15"
          width="21.2"
          height="21.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.05"
            result="effect1_foregroundBlur_160_1580"
          />
        </filter>
        <linearGradient
          id="paint0_linear_160_1580"
          x1="6"
          y1="0"
          x2="6"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id="clip0_160_1580">
          <path
            d="M0 6C0 2.68629 2.68629 0 6 0V0C9.31371 0 12 2.68629 12 6V6C12 9.31371 9.31371 12 6 12V12C2.68629 12 0 9.31371 0 6V6Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const content = {
  title: "Your community earns. Your team earns. You earn alongside them.",
  cards: [
    {
      icon: images.sellers.whatYourTeamGetsIcon,
      bg: images.affiliates.doorToDoorBg,
      title: "What your team gets",
      subtitle: "Agents on your team receive everything they need to succeed.",
      items: [
        "Access to sell payment processing",
        "Full suite of sales tools and educational materials",
        "Access to affiliate marketing tools and other product sale opportunities",
        "Real time commission and volume tracking",
        "Merchant and portfolio management tools",
        "XP program with incentivizing rewards",
        "Split payments for downline and upstream commissions",
        "Mobile first access from anywhere",
      ],
      bullet: <GreenBullet />,
      footerText:
        "Agents focus on relationships and outreach.\nFirstline handles the rest.",
      footerColor: "text-[#47D9D1]",
    },
    {
      icon: images.sellers.whatYouGetAsTeamOwnerIcon,
      bg: images.affiliates.digitalAffiliatesBg,
      title: "What you get as a team owner",
      subtitle: "As a team owner, you earn on the success of your agents.",
      items: [
        "Override commissions on team volume",
        "Full visibility into team performance",
        "Scalable income without managing fulfillment",
        "A monetization layer for your existing audience",
        "Total control of how you run your community, from commission splits, to rewards",
      ],
      bullet: <PurpleBullet />,
      footerText: "The power to make your team succeed is in your hands.",
      footerColor: "text-[#8787EF]",
    },
  ],
};

export default function AgenciesEarnings() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <Heading as="h2" align="center" className="text-black text-balance">
          {content.title}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:mt-15">
          {content.cards.map((card) => (
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
                  <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-white text-2xl font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-white/60 text-sm font-semibold">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-6">
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
                  <p
                    className={`text-sm font-medium whitespace-pre-line mt-6 ${card.footerColor}`}
                  >
                    {card.footerText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

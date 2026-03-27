import Image from "next/image";
import { AutoAvatar } from "@/components/ui/auto-avatar";
import { Heading } from "@/components/ui/heading";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cdn, images } from "@/lib/cdn";

const content = {
  title: "Why list with Firstline?",
  descriptions: [
    {
      title: "Access Our Network",
      description:
        "Tap into thousands of motivated sellers ready to hustle your product",
      icon: (
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Access Our Network</title>
          <path
            d="M4.75 16.05H8.75M3.75 18.75H9.75C11.4069 18.75 12.75 17.5412 12.75 16.05V3.45C12.75 1.95883 11.4069 0.75 9.75 0.75H3.75C2.09315 0.75 0.75 1.95883 0.75 3.45V16.05C0.75 17.5412 2.09315 18.75 3.75 18.75Z"
            stroke="#9C8AFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Leverage Our Stack",
      description:
        "Use Firstline Payments infrastructure for seamless transactions",
      icon: (
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Leverage Our Stack</title>
          <path
            d="M4.75 16.05H8.75M3.75 18.75H9.75C11.4069 18.75 12.75 17.5412 12.75 16.05V3.45C12.75 1.95883 11.4069 0.75 9.75 0.75H3.75C2.09315 0.75 0.75 1.95883 0.75 3.45V16.05C0.75 17.5412 2.09315 18.75 3.75 18.75Z"
            stroke="#51C9C2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Built-in Communication",
      description: "Our CRM keeps everyone connected and deals moving",
      icon: (
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Built-in Communication</title>
          <path
            d="M4.75 16.05H8.75M3.75 18.75H9.75C11.4069 18.75 12.75 17.5412 12.75 16.05V3.45C12.75 1.95883 11.4069 0.75 9.75 0.75H3.75C2.09315 0.75 0.75 1.95883 0.75 3.45V16.05C0.75 17.5412 2.09315 18.75 3.75 18.75Z"
            stroke="#9C8AFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ],
  socialProof: {
    items: [
      { name: "John Doe" },
      { name: "Sarah Miller" },
      { name: "James Wilson" },
      { name: "Emily Chen" },
      { name: "Michael Brown" },
      { name: "Lisa Park" },
      { name: "David Kim" },
      { name: "Rachel Adams" },
      { name: "Tom Garcia" },
      { name: "Nina Patel" },
    ],
  },
};

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <Heading as="h2" align="center" className="lg:text-left">
        {content.title}
      </Heading>
      <div className="flex flex-col gap-6">
        {content.descriptions.map((description) => (
          <div key={description.title} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              {description.icon}
              <Heading as="h3" size={"xs"}>
                {description.title}
              </Heading>
            </div>
            <p className="text-white/60">{description.description}</p>
          </div>
        ))}
      </div>
      <hr className="border-white/16" />
      <Image
        src={cdn(images.contact.contactEmail)}
        alt="Contact Email"
        width={400}
        height={300}
        className="max-w-65 mx-auto lg:mx-0 lg:-ml-5"
        unoptimized
      />
      <div className="flex flex-col lg:flex-row w-full items-center gap-4 border-t border-white/6">
        <span className="text-white/72 text-lg shrink-0 text-center lg:text-left">
          Trusted by <br /> 2,500+ users:
        </span>
        <div className="relative flex-1 min-w-0 mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <InfiniteSlider gap={24} speed={50} repeat={2}>
            {content.socialProof.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 shrink-0 size-[63px] p-1 rounded-full bg-[linear-gradient(162.92deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)] shadow-[0px_11.69px_23.26px_rgba(0,0,0,0.25)] backdrop-blur-[80px]"
              >
                <AutoAvatar name={item.name} width={55} height={55} />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
}

import bentoImage1 from "@/public/sections/benefits/bento-1.webp";
import bentoImage2 from "@/public/sections/benefits/bento-2.webp";
import bentoImage3 from "@/public/sections/benefits/bento-3.webp";
import bentoImage4 from "@/public/sections/benefits/bento-4.webp";
import bentoImage5 from "@/public/sections/benefits/bento-5.webp";
import Image from "next/image";

const content = {
  bento: [
    {
      text: {
        highlightText: "Turn anyone",
        regularText: "into a tracked incentivized salesperson",
      },
      image: bentoImage1,
    },
    {
      text: {
        highlightText: "",
        regularText: "",
      },
      image: bentoImage2,
    },
    {
      text: {
        highlightText: "See every sale, split, and payout",
        regularText: "in real time",
      },
      image: bentoImage3,
    },
    {
      text: {
        highlightText: "Scale globally",
        regularText: "without building ops, finance, or tooling",
      },
      image: bentoImage4,
    },
    {
      text: {
        highlightText: "Pay teams, affiliates and partners",
        regularText: "without disputes or delays",
      },
      image: bentoImage5,
    },
  ],
};

export function Bento() {
  const firstThreeItems = content.bento.slice(0, 3);
  const lastItems = content.bento.slice(3);
  return (
    <div className="grid grid-cols-1 mt-15 gap-3 md:grid-cols-2 lg:grid-cols-6 [--bento-card-height:22.56rem]">
      {firstThreeItems.map((item) => (
        <div
          key={item.text.highlightText}
          className="col-span-1 p-6 md:col-span-2 w-full relative flex flex-col justify-end h-(--bento-card-height) bg-[#131418] overflow-hidden rounded-4xl"
        >
          <Image
            src={item.image}
            alt={item.text.highlightText + " " + item.text.regularText}
            fill
            className="object-cover"
          />
          <p className="relative z-10 text-lg leading-tight max-w-2xs">
            <span className="font-semibold text-white">
              {item.text.highlightText}
            </span>{" "}
            <span className="text-white/65">{item.text.regularText}</span>
          </p>
        </div>
      ))}
      {lastItems.map((item) => (
        <div
          key={item.text.highlightText}
          className="col-span-1 p-6 md:col-span-2 lg:col-span-3 flex flex-col justify-end h-(--bento-card-height) w-full relative bg-[#131418] overflow-hidden rounded-4xl"
        >
          <Image
            src={item.image}
            alt={item.text.highlightText + " " + item.text.regularText}
            fill
            className="object-cover"
          />
          <p className="relative z-10 text-lg ">
            <span className="font-semibold text-white">
              {item.text.highlightText}
            </span>{" "}
            <span className="text-white/65">{item.text.regularText}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

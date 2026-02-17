"use client";

import { Heading } from "@/components/ui/heading";
import { HeroKicker } from "./hero-kicker";
import { AgentIcon, AgenciesIcon, SellerIcon, AffiliatesIcon } from "./svgs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/sections/hero/hero-image.webp";
import { useState } from "react";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import profilePhoto from "@/public/sections/hero/mock-profile-picture.png";

const content = {
  kicker: "$12M+ paid out",
  title: "The commision platform for",
  description:
    "Turn our base of agents and affiliates into a dedicated sales team. Split payments instantly, pay commissions in real-time, and scale globally with Firstline.",
  cta: {
    label: "Start Earning Today",
    to: "/",
  },
  modes: [
    {
      key: "sellers",
      label: "Sellers",
      icon: <SellerIcon />,
      image: heroImage,
    },
    {
      key: "agents",
      label: "Agents",
      icon: <AgentIcon />,
      image: heroImage,
    },
    {
      key: "agencies",
      label: "Agencies",
      icon: <AgenciesIcon />,
      image: heroImage,
    },
    {
      key: "affiliates",
      label: "Affiliates",
      icon: <AffiliatesIcon />,
      image: heroImage,
    },
  ],
  socialProof: {
    items: [
      { image: profilePhoto, name: "John Doe" },
      { image: profilePhoto, name: "Sarah Miller" },
      { image: profilePhoto, name: "James Wilson" },
      { image: profilePhoto, name: "Emily Chen" },
      { image: profilePhoto, name: "Michael Brown" },
      { image: profilePhoto, name: "Lisa Park" },
      { image: profilePhoto, name: "David Kim" },
      { image: profilePhoto, name: "Rachel Adams" },
      { image: profilePhoto, name: "Tom Garcia" },
      { image: profilePhoto, name: "Nina Patel" },
    ],
  },
};

type ModeKey = (typeof content.modes)[number]["key"];

export default function Hero() {
  const [activeMode, setActiveMode] = useState<ModeKey>(content.modes[0].key);

  const activeModeData = content.modes.find((mode) => mode.key === activeMode);
  const activeModeImage = activeModeData?.image;

  const toggleMode = (key: ModeKey) => {
    setActiveMode(key);
  };

  return (
    <section id="hero" className="pt-25">
      <div className="container">
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1">
            <HeroKicker>{content.kicker}</HeroKicker>
            <Heading as="h1" className="mt-6">
              {content.title}
            </Heading>
            <div className="relative overflow-hidden bg-white/4 backdrop-blur-[16.95px] border mt-4 p-1 border-white/6 flex flex-row w-fit items-center gap-2 rounded-[36px]">
              {content.modes.map((mode) => {
                const isActive = activeMode === mode.key;

                return (
                  <div
                    key={mode.key}
                    className="relative rounded-[36px_4px_4px_36px] last:rounded-[4px_36px_36px_4px]"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="hero-mode-active-bg"
                        className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_-59.8%,rgba(255,255,255,0)_118.63%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5),inset_0_1px_0_0_rgba(255,255,255,0)]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => toggleMode(mode.key)}
                      className="relative z-10 flex cursor-pointer flex-row items-center gap-2 px-4 py-2"
                    >
                      {mode.icon}
                      <span className="text-white/72 text-base">
                        {mode.label}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-white/72 text-base max-w-lg">
              {content.description}
            </p>
            <Button
              className="mt-12"
              nativeButton={false}
              render={<Link href={content.cta.to} />}
            >
              {content.cta.label}
            </Button>
          </div>
          <Image
            src={activeModeImage ?? heroImage}
            alt="Hero Image"
            width={450}
            height={450}
            className="object-cover self-start w-full h-full flex-1 -mt-32"
          />
        </div>

        <div className="flex w-full  items-center gap-4 -mt-24 border-t border-white/6 pt-4 pb-16">
          <span className="text-white/72 text-lg whitespace-nowrap shrink-0">
            Trusted by <br /> 2,500+ users:
          </span>
          <div className="relative flex-1 min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <Marquee className="[--duration:30s] [--gap:1.5rem]">
              {content.socialProof.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2.5 shrink-0 size-[63px] p-1 rounded-full bg-[linear-gradient(162.92deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)] shadow-[0px_11.69px_23.26px_rgba(0,0,0,0.25)] backdrop-blur-[80px]"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={55}
                    height={55}
                    className="rounded-full"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

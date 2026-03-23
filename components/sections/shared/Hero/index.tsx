"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cdn, images } from "@/lib/cdn";
import { HeroKicker } from "./hero-kicker";
import { AffiliatesIcon, AgenciesIcon, AgentIcon, SellerIcon } from "./svgs";

const content = {
  kicker: "$12M+ paid out",
  title: "The commission platform for",
  cta: {
    label: "Start Earning Today",
    to: "/",
  },
  modes: [
    {
      key: "sellers",
      label: "Sellers",
      icon: <SellerIcon />,
      image: images.hero.image,
      description:
        "Launch products faster, scale distribution effortlessly, and tap into a network of motivated salespeople ready to sell for you. Only pay when revenue is generated, with full visibility so every dollar spent, drives growth.",
    },
    {
      key: "agents",
      label: "Agents",
      icon: <AgentIcon />,
      image: images.hero.image,
      description:
        "Access high-quality products to sell, work on your own terms, and earn commissions without the usual friction. Every sale is tracked, every payout is automatic, and everything is built so you can focus on closing, not chasing.",
    },
    {
      key: "agencies",
      label: "Agencies",
      icon: <AgenciesIcon />,
      image: images.hero.image,
      description:
        "Equip your team or community with the tools they need to sell, track performance, and get paid in one seamless system. From onboarding to checkout, everything is streamlined so you can scale without operational overhead.",
    },
    {
      key: "affiliates",
      label: "Affiliates",
      icon: <AffiliatesIcon />,
      image: images.hero.image,
      description:
        "Turn your audience into a reliable revenue stream by promoting real products with built-in conversion and payout infrastructure. No complicated setups, no manual tracking, just a smarter way to grow consistent income from your influence.",
    },
  ],
  socialProof: {
    items: [
      { image: images.hero.profilePhoto, name: "John Doe" },
      { image: images.hero.profilePhoto, name: "Sarah Miller" },
      { image: images.hero.profilePhoto, name: "James Wilson" },
      { image: images.hero.profilePhoto, name: "Emily Chen" },
      { image: images.hero.profilePhoto, name: "Michael Brown" },
      { image: images.hero.profilePhoto, name: "Lisa Park" },
      { image: images.hero.profilePhoto, name: "David Kim" },
      { image: images.hero.profilePhoto, name: "Rachel Adams" },
      { image: images.hero.profilePhoto, name: "Tom Garcia" },
      { image: images.hero.profilePhoto, name: "Nina Patel" },
    ],
  },
};

type ModeKey = (typeof content.modes)[number]["key"];

export default function Hero() {
  const [activeMode, setActiveMode] = useState<ModeKey>(content.modes[0].key);

  const activeModeData = content.modes.find((mode) => mode.key === activeMode);
  const activeModeImage = activeModeData?.image ?? images.hero.image;
  const activeModeDescription = activeModeData?.description ?? "";

  const toggleMode = (key: ModeKey) => {
    setActiveMode(key);
  };

  return (
    <Section id="hero" className="pt-12 lg:pt-12 pb-0 lg:pb-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row w-full [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <HeroKicker>{content.kicker}</HeroKicker>
            <Heading
              as="h1"
              className="mt-6 text-center lg:text-left text-balance"
            >
              {content.title}
            </Heading>
            <div className="relative overflow-hidden bg-white/4 backdrop-blur-[16.95px] border mt-4 p-1 border-white/6 flex flex-row items-center gap-2 rounded-[36px]">
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
                      className="relative z-10 flex cursor-pointer flex-row items-center gap-2 px-[6px] lg:px-4 py-2"
                    >
                      {mode.icon}
                      <span className="text-white/72 text-sm lg:text-base">
                        {mode.label}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 lg:mt-6 max-w-lg mx-auto lg:mx-0 min-h-[7rem] lg:min-h-[6rem]">
              <AnimatePresence initial={false} mode="wait">
                <motion.p
                  key={activeMode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-white/72 text-sm lg:text-base"
                >
                  {activeModeDescription}
                </motion.p>
              </AnimatePresence>
            </div>
            <Button
              className="mt-8 lg:mt-12"
              nativeButton={false}
              render={<Link href={content.cta.to} />}
            >
              {content.cta.label}
            </Button>
          </div>
          <Image
            src={cdn(activeModeImage, { width: 1200 })}
            alt="Firstline commission platform dashboard preview"
            width={1200}
            height={1367}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover self-start w-full h-auto flex-1 lg:-mt-32"
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center gap-4 -mt-24 border-t border-white/6 pt-4 pb-16">
          <span className="text-white/72 text-lg whitespace-nowrap shrink-0 text-center lg:text-left">
            Trusted by 2,500+ users:
          </span>
          <div className="relative flex-1 min-w-0 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <InfiniteSlider gap={24} speed={50} repeat={2}>
              {content.socialProof.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2.5 shrink-0 size-[63px] p-1 rounded-full bg-[linear-gradient(162.92deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)] shadow-[0px_11.69px_23.26px_rgba(0,0,0,0.25)] backdrop-blur-[80px]"
                >
                  <Image
                    src={cdn(item.image, { width: 110 })}
                    alt={item.name}
                    width={55}
                    height={55}
                    className="rounded-full"
                    unoptimized
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </Section>
  );
}

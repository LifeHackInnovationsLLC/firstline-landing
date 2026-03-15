const CLOUD_NAME = "deoxevgc6";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function cdn(
  path: string,
  options?: {
    width?: number;
    height?: number;
    crop?: string;
    quality?: string;
  },
): string {
  const transforms: string[] = ["f_auto", "q_auto"];

  if (options?.quality) {
    transforms[1] = `q_${options.quality}`;
  }
  if (options?.width) {
    transforms.push(`w_${options.width}`);
  }
  if (options?.height) {
    transforms.push(`h_${options.height}`);
  }
  if (options?.crop) {
    transforms.push(`c_${options.crop}`);
  }

  return `${BASE_URL}/${transforms.join(",")}/${path}`;
}

export const images = {
  hero: {
    image: "firstline/hero-image.webp",
    profilePhoto: "firstline/mock-profile-picture.webp",
  },
  benefits: {
    bento1: "firstline/bento-1.webp",
    bento2: "firstline/bento-2.webp",
    bento3: "firstline/bento-3.webp",
    bento4: "firstline/bento-4.webp",
    bento5: "firstline/bento-5.webp",
  },
  process: {
    step1: "firstline/step-1.webp",
    step2: "firstline/step-2.webp",
    step3: "firstline/step-3.webp",
    dashboardPreview: "firstline/dashboard-preview.png",
    dashboardMask: "firstline/process-dashboard-mask.png",
    sectionBlur: "firstline/process-section-blur.png",
  },
  audiences: {
    audience1: "firstline/audiences-1.webp",
  },
  affiliates: {
    bento1: "firstline/affiliates-bento-1_evs9to.webp",
    bento2: "firstline/kibqtfjupkckrzx3hjvt.webp",
    bento3: "firstline/iv8oojjnf7z9wzgginyb.webp",
    bento4: "firstline/affiliates-bento-4_qopezk.webp",
    bento5: "firstline/affiliates-bento-5_iubun2.webp",
    bento6: "firstline/dtctifxzbl2gql9oxcu7.webp",
    doorToDoorIcon: "firstline/-les-icon_q6w5o0.webp",
    doorToDoorBg: "firstline/door-to-door-bg_s06ggt.webp",
    digitalAffiliatesIcon: "firstline/digital-affiliates-icon_yjo4tb.webp",
    digitalAffiliatesBg: "firstline/digital-affiliates-bg_sbmfye.webp",
    readyToScale: "firstline/for-teams-that-scale.webp",
    hero: "firstline/jey9ilzrye7qlxz94wn0.png",
  },
  whySwitch: {
    icon1: "firstline/why-switch-icon-1.png",
    icon2: "firstline/why-switch-icon-2.png",
    icon3: "firstline/why-switch-icon-3.png",
    icon4: "firstline/why-switch-icon-4.png",
  },
  testimonials: {
    profilePhoto: "firstline/mock-profile-picture.webp",
  },
  sellers: {
    ellipseSplitPayments: "firstline/elipse-split-payments.webp",
    graphicSplitPayments: "firstline/graphic-split-payments.webp",
    greenEllipseSplitPayments: "firstline/elipse-green-split-payments.webp",
    growYourCommunitySocials:
      "firstline/grow-your-community-socials-image.webp",
    growYourCommunityBg: "firstline/grow-your-community-bg.webp",
    growYourCommunityPurple:
      "firstline/grow-your-community-purple-decoration.webp",
    growYourCommunityGreen:
      "firstline/grow-your-community-green-decoration.webp",
    uploadYourCourses: "firstline/upload-your-courses.webp",
    commerceWithoutLimitsGreen:
      "firstline/commerce-without-limits-decoration-green.webp",
    commerceWithoutLimitsPurple:
      "firstline/commerce-without-limits-decoration-purple.webp",
    commerceWithoutLimitsBg: "firstline/commerce-without-limits-bg.webp",
    whatYourTeamGetsIcon: "firstline/what-your-team-gets-icon.png",
    whatYouGetAsTeamOwnerIcon: "firstline/what-you-get-as-a-team-owner.png",
    comparisonSectionBg: "firstline/comparison-section-bg.webp",
  },
  agencies: {
    paymentProcessingGreenBlur: "firstline/payment-processing-green-blur.webp",
    paymentProcessingGlobe: "firstline/payment-processing-globe.webp",
    whyAgenciesBlur: "firstline/why-agencies-blur.webp",
    whyAgenciesGraphic: "firstline/why-agencies-graphic.webp",
    potentialEarnings: "firstline/potential-earnings.webp",
  },
  team: {
    communityDownline: "firstline/community-downline.webp",
  },
  agents: {
    bento1: "firstline/agents-bento-1.webp",
    bento2: "firstline/agents-bento-2.webp",
    bento3: "firstline/agents-bento-3.webp",
    bento4: "firstline/agents-bento-4.webp",
    bento5: "firstline/agents-bento-5.webp",
    bento6: "firstline/agents-bento-6.webp",
    readyToGlobalGreenBlur: "firstline/ready-to-global-green-blur.webp",
    readyToGlobalPurpleBlur: "firstline/ready-to-global-purple-blur.webp",
    bottomLineBlur: "firstline/the-bottom-line-green-blur.webp",
    bottomLineImage: "firstline/the-bottom-line-image.png",
    globe: "firstline/globe.webp",
    recruitClosers: "firstline/recruit-closers.png",
    leadGenerators: "firstline/lead-generators.png",
    customPayouts: "firstline/custom-payouts.png",
  },
  contact: {
    contactEmail: "firstline/contact-email.webp",
  },
  cta: {
    bgMobile: "firstline/cta-bg-mobile.png",
    bgDesktop: "firstline/cta-bg.webp",
  },
  footer: {
    gradient: "firstline/firstline-footer-gradient.webp",
    logo: "firstline/firstline-footer.webp",
  },
  decorations: {
    patternPurpleCard: "firstline/pattern-decoration-purple-card.webp",
    patternGreen: "firstline/pattern-decoration-green.webp",
    purpleGradientMask: "firstline/purple-gradient-mask.webp",
  },
  courses: {
    trainingCardBg: "firstline/training-card-bg.webp",
  },
  season1: {
    bento1: "firstline/season1-bento-1.webp",
    bento2: "firstline/season1-bento-2.webp",
    bento3: "firstline/season1-bento-3.webp",
    bento4: "firstline/season1-bento-4.webp",
    level1: "firstline/level-1.webp",
    level2: "firstline/level-2.webp",
    level3: "firstline/level-3.webp",
    level4: "firstline/level-4.webp",
    level5: "firstline/level-5.webp",
    level6: "firstline/level-6.webp",
    level7: "firstline/level-7.webp",
    level8: "firstline/level-8.webp",
    climbPurpleElipse: "firstline/climb-purple-elipse.webp",
    climbGreenElipse: "firstline/climb-green-elipse.webp",
    tier1: "firstline/tier-1.png",
    tier2: "firstline/tier-2.png",
    tier3: "firstline/tier-3.png",
    tier4: "firstline/tier-4.png",
    tier5: "firstline/tier-5.png",
    tier6: "firstline/tier-6.png",
    xpBg: "firstline/xp-bg.webp",
  },
  brand: {
    logo: "firstline/logo.svg",
  },
} as const;

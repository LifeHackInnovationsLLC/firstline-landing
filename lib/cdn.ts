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
    bento2: "firstline/affiliates-bento-2_c4qsbp.webp",
    bento3: "firstline/affiliates-bento-3_aikqjq.webp",
    bento4: "firstline/affiliates-bento-4_qopezk.webp",
    bento5: "firstline/affiliates-bento-5_iubun2.webp",
    bento6: "firstline/affiliates-bento-6_bph8bn.webp",
    doorToDoorIcon: "firstline/door-to-door-sales-icon_q6w5o0.webp",
    doorToDoorBg: "firstline/door-to-door-bg_s06ggt.webp",
    digitalAffiliatesIcon: "firstline/digital-affiliates-icon_yjo4tb.webp",
    digitalAffiliatesBg: "firstline/digital-affiliates-bg_sbmfye.webp",
    readyToScale: "firstline/ready-to-scale_lojx8h.webp",
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
    growYourCommunitySocials: "firstline/grow-your-community-socials-image.webp",
    growYourCommunityPurple: "firstline/grow-your-community-purple-decoration.webp",
    growYourCommunityGreen: "firstline/grow-your-community-green-decoration.webp",
    uploadYourCourses: "firstline/upload-your-courses.webp",
    commerceWithoutLimitsGreen: "firstline/commerce-without-limits-decoration-green.webp",
    commerceWithoutLimitsPurple: "firstline/commerce-without-limits-decoration-purple.webp",
  },
  agencies: {
    paymentProcessingGreenBlur: "firstline/payment-processing-green-blur.webp",
    paymentProcessingGlobe: "firstline/payment-processing-globe.webp",
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
  brand: {
    logo: "firstline/logo.svg",
  },
} as const;

import Image from "next/image";
import { Section } from "@/components/layout/section";
import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardList,
  FeatureCardListItem,
  FeatureCardTitle,
} from "@/components/ui/feature-card";
import { cdn, images } from "@/lib/cdn";

function CommunitiesIcon() {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5876 8.75374C15.157 8.12288 18.0839 9.81052 18.7403 13.8167C18.8223 14.3173 18.4209 14.75 17.9184 14.75H14.5161M8.45122 3.375C8.45122 4.82475 7.28749 6 5.85197 6C4.41644 6 3.25272 4.82475 3.25272 3.375C3.25272 1.92525 4.41644 0.75 5.85197 0.75C7.28749 0.75 8.45122 1.92525 8.45122 3.375ZM16.249 3.375C16.249 4.82475 15.0852 6 13.6497 6C12.2142 6 11.0505 4.82475 11.0505 3.375C11.0505 1.92525 12.2142 0.75 13.6497 0.75C15.0852 0.75 16.249 1.92525 16.249 3.375ZM10.1208 14.75H1.58311C1.08061 14.75 0.67952 14.3144 0.761706 13.8138C1.89743 6.89541 9.8065 6.89541 10.9422 13.8138C11.0244 14.3144 10.6233 14.75 10.1208 14.75Z"
        stroke="#9C8AFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OverrideCommissionsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.75 4.25014C6.60981 4.25014 5.81576 4.76725 5.81576 5.88401C5.81576 7.16343 6.80079 7.43784 7.75 7.75962C8.69921 8.0814 9.68424 8.35582 9.68424 9.63523C9.68424 10.752 8.89019 11.2691 7.75 11.2691M7.75 4.25014C8.57517 4.25014 9.17639 4.64011 9.48423 5.19269M7.75 4.25014V3.08257M7.75 11.2691C6.92484 11.2691 6.32361 10.8791 6.01578 10.3266M7.75 11.2691V12.4167M14.75 7.75C14.75 11.616 11.616 14.75 7.75 14.75C3.88401 14.75 0.75 11.616 0.75 7.75C0.75 3.88401 3.88401 0.75 7.75 0.75C11.616 0.75 14.75 3.88401 14.75 7.75Z"
        stroke="#51C9C2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EarnFromEveryoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.76261 2.37747C8.50762 1.4396 7.65102 0.75 6.63356 0.75C5.41503 0.75 4.42722 1.73907 4.42722 2.95915C4.42722 4.17923 5.41503 5.1683 6.63356 5.1683C6.92056 5.1683 7.19477 5.11342 7.44628 5.01359M8.76261 2.37747C9.01412 2.27764 9.28833 2.22277 9.57533 2.22277C10.7939 2.22277 11.7817 3.21183 11.7817 4.43191C11.7817 5.65199 10.7939 6.64106 9.57533 6.64106C8.55787 6.64106 7.70126 5.95146 7.44628 5.01359M8.76261 2.37747C7.73063 2.7871 7.15681 3.94885 7.44628 5.01359M3.69178 14.0049H5.16267C5.16267 14.0049 6.92159 14.6849 8.10444 14.7413C10.7125 14.8656 12.7843 13.6507 14.4624 11.8029C14.8456 11.381 14.8391 10.7439 14.4833 10.2985C14.0246 9.7244 13.1624 9.67794 12.5872 10.135C11.9534 10.6386 11.1123 11.2051 10.3108 11.4275C9.2037 11.7349 8.10444 11.7957 8.10444 11.7957C13.988 11.4275 11.7817 6.64095 3.69178 9.95482M0.75 8.85021H3.69178V14.7413H0.75V8.85021Z"
        stroke="#9C8AFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobalTeamsSmallIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 15.75C12.3921 15.75 15.75 12.3921 15.75 8.25C15.75 4.10786 12.3921 0.75 8.25 0.75M8.25 15.75C4.10786 15.75 0.75 12.3921 0.75 8.25C0.75 4.10786 4.10786 0.75 8.25 0.75M8.25 15.75C6.34686 15.75 4.80405 12.3921 4.80405 8.25C4.80405 4.10786 6.34686 0.75 8.25 0.75M8.25 15.75C10.1531 15.75 11.6959 12.3921 11.6959 8.25C11.6959 4.10786 10.1531 0.75 8.25 0.75M15.5473 8.25H0.952703"
        stroke="#51C9C2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const listItems = [
  {
    icon: <CommunitiesIcon />,
    label: "Discord & Telegram communities perfect for this",
  },
  {
    icon: <OverrideCommissionsIcon />,
    label: "Override commissions on your entire team",
  },
  {
    icon: <EarnFromEveryoneIcon />,
    label: "Earn from everyone your team brings in",
  },
  {
    icon: <GlobalTeamsSmallIcon />,
    label: "Build global teams across any timezone",
  },
];

export function CommunityDownline() {
  return (
    <Section>
      <div className="container">
        <FeatureCard>
          <Image
            src={cdn(images.team.communityDownline)}
            alt=""
            fill
            className="object-cover pointer-events-none"
            unoptimized
          />
          <FeatureCardContent className="relative z-10">
            <FeatureCardTitle>Your community is your downline</FeatureCardTitle>
            <FeatureCardDescription>
              Your community is your downline. Agents earn competitive
              commissions, and team leaders earn override commissions on the
              entire team, across all products. A true win-win.
            </FeatureCardDescription>
            <FeatureCardList>
              {listItems.map((item) => (
                <FeatureCardListItem key={item.label}>
                  {item.icon}
                  {item.label}
                </FeatureCardListItem>
              ))}
            </FeatureCardList>
          </FeatureCardContent>
        </FeatureCard>
      </div>
    </Section>
  );
}

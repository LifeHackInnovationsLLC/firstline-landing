import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";

const content = {
  title: "From scale to\nsettlement in just\nfour steps",
  steps: [
    {
      title: "Customer Pays",
      description: "A customer makes a purchase through a Firstline-powered vendor",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_160_1453)">
            <rect width="48" height="48" rx="24" fill="#131418"/>
            <g filter="url(#filter0_f_160_1453)">
              <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#6363B1"/>
            </g>
            <path d="M23.8933 31.056C22.8053 32.592 21.2853 33.36 19.3333 33.36C17.3813 33.36 15.8613 32.592 14.7733 31.056C13.6853 29.52 13.1413 27.368 13.1413 24.6C13.1413 21.832 13.6853 19.68 14.7733 18.144C15.8613 16.608 17.3813 15.84 19.3333 15.84C21.2853 15.84 22.8053 16.608 23.8933 18.144C24.9813 19.68 25.5253 21.832 25.5253 24.6C25.5253 27.368 24.9813 29.52 23.8933 31.056ZM17.0533 29.184C17.5813 30.24 18.3413 30.768 19.3333 30.768C20.3253 30.768 21.0773 30.24 21.5893 29.184C22.1173 28.128 22.3813 26.608 22.3813 24.624C22.3813 22.624 22.1173 21.096 21.5893 20.04C21.0773 18.968 20.3253 18.432 19.3333 18.432C18.3413 18.432 17.5813 18.968 17.0533 20.04C16.5413 21.096 16.2853 22.624 16.2853 24.624C16.2853 26.608 16.5413 28.128 17.0533 29.184ZM26.5659 22.152V19.56H30.1179C30.7739 19.56 31.1019 19.24 31.1019 18.6V16.2H34.1739V33H31.1019V23.112C31.1019 22.472 30.7739 22.152 30.1179 22.152H26.5659Z" fill="#9393F4"/>
          </g>
          <defs>
            <filter id="filter0_f_160_1453" x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur_160_1453"/>
            </filter>
            <clipPath id="clip0_160_1453">
              <rect width="48" height="48" rx="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Instant Split",
      description: "Payment is automatically split between vendor and your commission",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_160_1467)">
            <rect width="48" height="48" rx="24" fill="#131418"/>
            <g filter="url(#filter0_f_160_1467)">
              <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#368F8A"/>
            </g>
            <path d="M21.8777 31.056C20.7897 32.592 19.2697 33.36 17.3177 33.36C15.3657 33.36 13.8457 32.592 12.7577 31.056C11.6697 29.52 11.1257 27.368 11.1257 24.6C11.1257 21.832 11.6697 19.68 12.7577 18.144C13.8457 16.608 15.3657 15.84 17.3177 15.84C19.2697 15.84 20.7897 16.608 21.8777 18.144C22.9657 19.68 23.5097 21.832 23.5097 24.6C23.5097 27.368 22.9657 29.52 21.8777 31.056ZM15.0377 29.184C15.5657 30.24 16.3257 30.768 17.3177 30.768C18.3097 30.768 19.0617 30.24 19.5737 29.184C20.1017 28.128 20.3657 26.608 20.3657 24.624C20.3657 22.624 20.1017 21.096 19.5737 20.04C19.0617 18.968 18.3097 18.432 17.3177 18.432C16.3257 18.432 15.5657 18.968 15.0377 20.04C14.5257 21.096 14.2697 22.624 14.2697 24.624C14.2697 26.608 14.5257 28.128 15.0377 29.184ZM31.3914 23.88C32.1274 23.384 32.6634 22.904 32.9994 22.44C33.3514 21.976 33.5274 21.432 33.5274 20.808C33.5274 20.072 33.2954 19.496 32.8314 19.08C32.3834 18.648 31.7594 18.432 30.9594 18.432C30.0474 18.432 29.3434 18.72 28.8474 19.296C28.3674 19.872 28.1274 20.712 28.1274 21.816H25.0554C25.0554 19.912 25.5994 18.44 26.6874 17.4C27.7754 16.36 29.2154 15.84 31.0074 15.84C32.7354 15.84 34.1114 16.312 35.1354 17.256C36.1594 18.184 36.6714 19.408 36.6714 20.928C36.6714 21.952 36.3994 22.864 35.8554 23.664C35.3114 24.448 34.4314 25.248 33.2154 26.064L30.4314 27.888C29.3754 28.576 28.6394 29.416 28.2234 30.408H36.8154V33H24.6474C24.6474 31.384 24.9594 29.992 25.5834 28.824C26.2234 27.64 27.2234 26.6 28.5834 25.704L31.3914 23.88Z" fill="#45C0BA"/>
          </g>
          <defs>
            <filter id="filter0_f_160_1467" x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur_160_1467"/>
            </filter>
            <clipPath id="clip0_160_1467">
              <rect width="48" height="48" rx="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "You're Credited",
      description: "Your commission appears in your Firstline balance immediately",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_160_1460)">
            <rect width="48" height="48" rx="24" fill="#131418"/>
            <g filter="url(#filter0_f_160_1460)">
              <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#368F8A"/>
            </g>
            <path d="M21.655 31.056C20.567 32.592 19.047 33.36 17.095 33.36C15.143 33.36 13.623 32.592 12.535 31.056C11.447 29.52 10.903 27.368 10.903 24.6C10.903 21.832 11.447 19.68 12.535 18.144C13.623 16.608 15.143 15.84 17.095 15.84C19.047 15.84 20.567 16.608 21.655 18.144C22.743 19.68 23.287 21.832 23.287 24.6C23.287 27.368 22.743 29.52 21.655 31.056ZM14.815 29.184C15.343 30.24 16.103 30.768 17.095 30.768C18.087 30.768 18.839 30.24 19.351 29.184C19.879 28.128 20.143 26.608 20.143 24.624C20.143 22.624 19.879 21.096 19.351 20.04C18.839 18.968 18.087 18.432 17.095 18.432C16.103 18.432 15.343 18.968 14.815 20.04C14.303 21.096 14.047 22.624 14.047 24.624C14.047 26.608 14.303 28.128 14.815 29.184ZM30.5643 23.112C31.4283 23.112 32.0923 22.896 32.5563 22.464C33.0363 22.016 33.2763 21.432 33.2763 20.712C33.2763 19.992 33.0443 19.432 32.5803 19.032C32.1163 18.632 31.4923 18.432 30.7083 18.432C29.8443 18.432 29.1803 18.696 28.7163 19.224C28.2523 19.736 28.0203 20.504 28.0203 21.528H24.9483C24.9483 19.736 25.4763 18.344 26.5323 17.352C27.6043 16.344 29.0523 15.84 30.8763 15.84C32.5563 15.84 33.8923 16.256 34.8843 17.088C35.8923 17.92 36.3963 18.976 36.3963 20.256C36.3963 21.92 35.6363 23.136 34.1163 23.904C36.0683 24.72 37.0443 26.16 37.0443 28.224C37.0443 29.76 36.4763 31 35.3403 31.944C34.2203 32.888 32.7483 33.36 30.9243 33.36C29.0523 33.36 27.5323 32.848 26.3643 31.824C25.1963 30.8 24.6123 29.36 24.6123 27.504H27.6843C27.6843 28.576 27.9723 29.392 28.5483 29.952C29.1243 30.496 29.8923 30.768 30.8523 30.768C31.7483 30.768 32.4683 30.536 33.0123 30.072C33.5723 29.592 33.8523 28.952 33.8523 28.152C33.8523 27.32 33.5643 26.68 32.9883 26.232C32.4123 25.784 31.6043 25.56 30.5643 25.56H29.3163V23.112H30.5643Z" fill="#45C0BA"/>
          </g>
          <defs>
            <filter id="filter0_f_160_1460" x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur_160_1460"/>
            </filter>
            <clipPath id="clip0_160_1460">
              <rect width="48" height="48" rx="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Cash Out",
      description: "Withdraw your earnings anytime via bank, card, or other methods",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_160_1474)">
            <rect width="48" height="48" rx="24" fill="#131418"/>
            <g filter="url(#filter0_f_160_1474)">
              <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#6363B1"/>
            </g>
            <path d="M21.8855 31.056C20.7975 32.592 19.2775 33.36 17.3255 33.36C15.3735 33.36 13.8535 32.592 12.7655 31.056C11.6775 29.52 11.1335 27.368 11.1335 24.6C11.1335 21.832 11.6775 19.68 12.7655 18.144C13.8535 16.608 15.3735 15.84 17.3255 15.84C19.2775 15.84 20.7975 16.608 21.8855 18.144C22.9735 19.68 23.5175 21.832 23.5175 24.6C23.5175 27.368 22.9735 29.52 21.8855 31.056ZM15.0455 29.184C15.5735 30.24 16.3335 30.768 17.3255 30.768C18.3175 30.768 19.0695 30.24 19.5815 29.184C20.1095 28.128 20.3735 26.608 20.3735 24.624C20.3735 22.624 20.1095 21.096 19.5815 20.04C19.0695 18.968 18.3175 18.432 17.3255 18.432C16.3335 18.432 15.5735 18.968 15.0455 20.04C14.5335 21.096 14.2775 22.624 14.2775 24.624C14.2775 26.608 14.5335 28.128 15.0455 29.184ZM27.6268 26.184H31.2747C31.9308 26.184 32.2588 25.864 32.2588 25.224V19.776L27.6268 26.184ZM24.8668 28.776V26.184L32.0908 16.2H35.2588V26.184H38.0908V28.776H35.2588V33H32.1868V28.776H24.8668Z" fill="#9393F4"/>
          </g>
          <defs>
            <filter id="filter0_f_160_1474" x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur_160_1474"/>
            </filter>
            <clipPath id="clip0_160_1474">
              <rect width="48" height="48" rx="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ],
};

export function AffiliatesSteps() {
  return (
    <Section id="affiliates-steps" className="bg-gray">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/3 items-start">
            <Heading as="h2" align="center" className="text-black text-balance lg:text-left">
              {content.title}
            </Heading>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-7">
            {content.steps.map((step) => (
              <div key={step.title} className="flex flex-col gap-7">
                {step.icon}
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg text-black font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-text-body text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

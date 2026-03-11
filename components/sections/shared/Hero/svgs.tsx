import type React from "react";
import { cn } from "@/lib/utils";

interface SellerIconProps extends React.HTMLAttributes<SVGSVGElement> {
  className?: string;
}
export const SellerIcon = ({ className, ...props }: SellerIconProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4 lg:size-[26px]", className)}
      {...props}
    >
      <title>Seller Icon</title>
      <g filter="url(#filter0_ii_36_812)">
        <path
          d="M24.9022 24.8071C25.7607 24.6332 26.274 23.7592 25.8463 23.0122C24.9037 21.3685 23.4198 19.9228 21.5222 18.822C19.0771 17.4036 16.0798 16.6339 13 16.6339C9.91869 16.6339 6.92293 17.402 4.4778 18.822C2.58017 19.9228 1.09629 21.3685 0.153701 23.0122C-0.274043 23.7592 0.23925 24.6332 1.09785 24.8071C8.94777 26.3976 17.0507 26.3976 24.9006 24.8071"
          fill="black"
        />
        <path
          d="M13 15.1217C17.2952 15.1217 20.7772 11.7366 20.7772 7.56085C20.7772 3.38511 17.2952 0 13 0C8.7048 0 5.22285 3.38511 5.22285 7.56085C5.22285 11.7366 8.7048 15.1217 13 15.1217Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_36_812"
          x="0"
          y="0"
          width="26"
          height="30"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6.1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_36_812"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_36_812"
            result="effect2_innerShadow_36_812"
          />
        </filter>
      </defs>
    </svg>
  );
};

interface PayoutIconProps extends React.HTMLAttributes<SVGSVGElement> {
  className?: string;
}
export const PayoutIcon = ({ className, ...props }: PayoutIconProps) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-2", className)}
      {...props}
    >
      <title>Payout Icon</title>
      <rect x="0.5" y="0.5" width="7" height="7" rx="3.5" stroke="#2AED78" />
      <rect x="2" y="2" width="4" height="4" rx="2" fill="#2AED78" />
    </svg>
  );
};
interface AgentIconProps extends React.HTMLAttributes<SVGSVGElement> {
  className?: string;
}
export const AgentIcon = ({ className, ...props }: AgentIconProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4 lg:size-[26px]", className)}
      {...props}
    >
      <title>Agent Icon</title>
      <g filter="url(#filter0_ii_36_818)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 21.8947C17.9124 21.8947 21.8947 17.9124 21.8947 13C21.8947 8.08758 17.9124 4.10526 13 4.10526C8.08758 4.10526 4.10526 8.08758 4.10526 13C4.10526 17.9124 8.08758 21.8947 13 21.8947ZM13 16.4211C14.8894 16.4211 16.4211 14.8894 16.4211 13C16.4211 11.1106 14.8894 9.57895 13 9.57895C11.1106 9.57895 9.57895 11.1106 9.57895 13C9.57895 14.8894 11.1106 16.4211 13 16.4211Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M2.73684 13C2.73684 13.7558 2.12418 14.3684 1.36842 14.3684C0.612663 14.3684 0 13.7558 0 13C0 12.2442 0.612663 11.6316 1.36842 11.6316C2.12418 11.6316 2.73684 12.2442 2.73684 13Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M26 13C26 13.7558 25.3873 14.3684 24.6316 14.3684C23.8758 14.3684 23.2632 13.7558 23.2632 13C23.2632 12.2442 23.8758 11.6316 24.6316 11.6316C25.3873 11.6316 26 12.2442 26 13Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M13 23.2632C13.7558 23.2632 14.3684 23.8758 14.3684 24.6316C14.3684 25.3873 13.7558 26 13 26C12.2442 26 11.6316 25.3873 11.6316 24.6316C11.6316 23.8758 12.2442 23.2632 13 23.2632Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M13 0C13.7558 -3.30351e-08 14.3684 0.612663 14.3684 1.36842C14.3684 2.12418 13.7558 2.73684 13 2.73684C12.2442 2.73684 11.6316 2.12418 11.6316 1.36842C11.6316 0.612663 12.2442 3.30354e-08 13 0Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M18.1316 21.8881C18.7861 21.5103 19.623 21.7345 20.0009 22.389C20.3788 23.0435 20.1545 23.8804 19.5 24.2583C18.8455 24.6362 18.0086 24.4119 17.6307 23.7574C17.2528 23.1029 17.4771 22.266 18.1316 21.8881Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M6.5 1.74169C7.1545 1.36381 7.99142 1.58806 8.3693 2.24256C8.74717 2.89707 8.52292 3.73398 7.86842 4.11186C7.21391 4.48974 6.377 4.26549 5.99912 3.61098C5.62124 2.95648 5.84549 2.11957 6.5 1.74169Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M21.8892 18.1316C22.2671 17.4771 23.104 17.2528 23.7585 17.6307C24.413 18.0086 24.6373 18.8455 24.2594 19.5C23.8815 20.1545 23.0446 20.3788 22.3901 20.0009C21.7356 19.623 21.5114 18.7861 21.8892 18.1316Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M1.74277 6.5C2.12065 5.8455 2.95756 5.62125 3.61207 5.99913C4.26658 6.37701 4.49083 7.21392 4.11295 7.86842C3.73507 8.52293 2.89815 8.74718 2.24365 8.3693C1.58914 7.99142 1.36489 7.15451 1.74277 6.5Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M7.87051 21.8881C7.21601 21.5103 6.37909 21.7345 6.00121 22.389C5.62334 23.0435 5.84759 23.8804 6.50209 24.2583C7.1566 24.6362 7.99351 24.4119 8.37139 23.7574C8.74927 23.1029 8.52502 22.266 7.87051 21.8881Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M19.5021 1.74169C18.8476 1.36381 18.0107 1.58806 17.6328 2.24256C17.2549 2.89707 17.4792 3.73398 18.1337 4.11186C18.7882 4.48974 19.6251 4.26549 20.003 3.61098C20.3808 2.95648 20.1566 2.11957 19.5021 1.74169Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M4.11327 18.1316C3.7354 17.4771 2.89848 17.2528 2.24398 17.6307C1.58947 18.0086 1.36522 18.8455 1.7431 19.5C2.12098 20.1545 2.95789 20.3788 3.6124 20.0009C4.2669 19.623 4.49115 18.7861 4.11327 18.1316Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M24.2601 6.5C23.8822 5.8455 23.0453 5.62125 22.3908 5.99913C21.7363 6.37701 21.512 7.21392 21.8899 7.86842C22.2678 8.52293 23.1047 8.74718 23.7592 8.3693C24.4137 7.99142 24.6379 7.15451 24.2601 6.5Z"
          fill="white"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_36_818"
          x="0"
          y="0"
          width="26"
          height="30"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_36_818"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_36_818"
            result="effect2_innerShadow_36_818"
          />
        </filter>
      </defs>
    </svg>
  );
};

interface AgenciesIconProps extends React.HTMLAttributes<SVGSVGElement> {
  className?: string;
}
export const AgenciesIcon = ({ className, ...props }: AgenciesIconProps) => {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4 lg:size-[26px]", className)}
      {...props}
    >
      <title>Agencies Icon</title>
      <g filter="url(#filter0_ii_36_821)">
        <path
          d="M1.35 23.2349H2.7V5.7595C2.70004 5.32419 2.83384 4.89993 3.08243 4.54683C3.33103 4.19373 3.68182 3.92969 4.0851 3.79214L14.8851 0.106264C15.1895 0.00244487 15.5136 -0.0258302 15.8307 0.0237678C16.1478 0.0733658 16.4489 0.199418 16.7092 0.39154C16.9694 0.583662 17.1813 0.836356 17.3275 1.1288C17.4737 1.42125 17.55 1.74509 17.55 2.07363V23.2349H18.9V10.7782C18.9001 10.6759 18.9223 10.575 18.965 10.4826C19.0077 10.3902 19.07 10.3087 19.1472 10.2439C19.2244 10.1791 19.3147 10.1326 19.4115 10.1079C19.5084 10.0831 19.6094 10.0807 19.7073 10.1007L22.6719 10.709C23.1308 10.803 23.5437 11.0568 23.8406 11.4273C24.1374 11.7978 24.2997 12.2621 24.3 12.7414V23.2349H25.65C26.008 23.2349 26.3514 23.3806 26.6046 23.6398C26.8578 23.8991 27 24.2508 27 24.6175C27 24.9841 26.8578 25.3358 26.6046 25.5951C26.3514 25.8543 26.008 26 25.65 26H1.35C0.991958 26 0.64858 25.8543 0.395406 25.5951C0.142232 25.3358 0 24.9841 0 24.6175C0 24.2508 0.142232 23.8991 0.395406 23.6398C0.64858 23.3806 0.991958 23.2349 1.35 23.2349Z"
          fill="white"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_36_821"
          x="0"
          y="0"
          width="27"
          height="30"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_36_821"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_36_821"
            result="effect2_innerShadow_36_821"
          />
        </filter>
      </defs>
    </svg>
  );
};

interface AffiliatesIconProps extends React.HTMLAttributes<SVGSVGElement> {
  className?: string;
}
export const AffiliatesIcon = ({
  className,
  ...props
}: AffiliatesIconProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4 lg:size-[26px]", className)}
      {...props}
    >
      <title>Affiliates Icon</title>
      <g filter="url(#filter0_ii_36_824)">
        <path
          d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.19089C3.63975 3.61935 1.97351 5.64967 0.989572 8.02511C0.00563267 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5994 25.9944 17.9749 25.0104C20.3503 24.0265 22.3806 22.3602 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9966 9.55321 24.6259 6.24856 22.1887 3.81132C19.7514 1.37407 16.4468 0.0033578 13 0ZM13.9512 20.2927V21.2946C13.9512 21.5469 13.851 21.7889 13.6726 21.9672C13.4942 22.1456 13.2523 22.2458 13 22.2458C12.7477 22.2458 12.5058 22.1456 12.3274 21.9672C12.149 21.7889 12.0488 21.5469 12.0488 21.2946V20.2927C11.2223 20.1691 10.448 19.8128 9.81659 19.2654C9.36586 18.8875 8.99473 18.4238 8.72474 17.9013C8.45476 17.3787 8.29132 16.8077 8.24391 16.2215C8.22786 16.0341 8.26771 15.8461 8.35845 15.6814C8.44918 15.5166 8.58672 15.3825 8.75367 15.2959C8.92063 15.2093 9.10951 15.1741 9.29644 15.1948C9.48337 15.2156 9.65997 15.2912 9.80391 15.4123C9.99807 15.5739 10.121 15.8052 10.1463 16.0566C10.1706 16.3958 10.2628 16.7267 10.4175 17.0295C10.5722 17.3324 10.7862 17.601 11.0468 17.8195C11.5709 18.2675 12.2483 18.4948 12.9366 18.4537C14.9151 18.4537 15.8537 17.6927 15.8537 16.1454C15.8537 15.118 14.9532 14.0146 13 14.0146C8.86537 14.0146 8.24391 11.478 8.24391 10.0195C8.27771 9.10996 8.59029 8.23278 9.1393 7.50682C9.68831 6.78085 10.4472 6.2412 11.3132 5.96097C11.5542 5.88657 11.7994 5.83161 12.0488 5.7961V4.80683C12.0488 4.55455 12.149 4.3126 12.3274 4.13421C12.5058 3.95583 12.7477 3.85561 13 3.85561C13.2523 3.85561 13.4942 3.95583 13.6726 4.13421C13.851 4.3126 13.9512 4.55455 13.9512 4.80683V5.83415C14.9469 6.00021 15.8598 6.49067 16.5479 7.22925C17.2361 7.96782 17.6608 8.9131 17.7561 9.91805C17.7665 10.1607 17.6838 10.3981 17.5248 10.5816C17.3658 10.7652 17.1427 10.881 16.901 10.9053C16.6594 10.9297 16.4177 10.8606 16.2253 10.7125C16.0329 10.5643 15.9045 10.3481 15.8663 10.1083C15.7958 9.41998 15.4651 8.78459 14.9418 8.33197C14.4185 7.87936 13.742 7.6437 13.0507 7.67317H12.8224C12.5135 7.67073 12.2059 7.71346 11.9093 7.8C11.5848 7.90585 11.2849 8.0761 11.0278 8.30057C10.7706 8.52504 10.5614 8.7991 10.4127 9.10634C10.2602 9.41032 10.1737 9.74314 10.159 10.0829C10.159 11.1229 10.5015 12.1376 13.0127 12.1376C16.1327 12.1376 17.7688 14.1668 17.7688 16.1707C17.7857 16.6929 17.6986 17.2133 17.5128 17.7016C17.3269 18.1899 17.0458 18.6364 16.6859 19.0152C16.326 19.394 15.8945 19.6975 15.4163 19.908C14.9381 20.1186 14.4229 20.2321 13.9005 20.2419L13.9512 20.2927Z"
          fill="white"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_36_824"
          x="0"
          y="0"
          width="26"
          height="30"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_36_824"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_36_824"
            result="effect2_innerShadow_36_824"
          />
        </filter>
      </defs>
    </svg>
  );
};

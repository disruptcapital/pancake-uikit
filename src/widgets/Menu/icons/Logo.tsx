import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import { lightColors } from "../../../theme/colors";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : lightColors.midnight;
  return (
    <Svg viewBox="0 0 148.92 32" {...props}>
      <defs>
        <linearGradient
          id="lollipop-gradient"
          x1="14.74"
          y1="12.65"
          x2="27.47"
          y2="12.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={lightColors.lollipop} />
          <stop offset="0.11" stopColor="#cd2d78" />
          <stop offset="0.25" stopColor="#d13d82" />
          <stop offset="0.4" stopColor="#d75792" />
          <stop offset="0.56" stopColor="#e07ba9" />
          <stop offset="0.73" stopColor="#eba9c7" />
          <stop offset="0.91" stopColor="#f8e0eb" />
          <stop offset="1" stopColor={lightColors.white} />
        </linearGradient>
      </defs>
      <path
        d="M2.26,17a15.5,15.5,0,1,1,15.5,15.5,16,16,0,0,1-9-2.9A15.71,15.71,0,0,1,2.26,17Z"
        transform="translate(-1.76 -1)"
        fill="#a8d9c1"
        stroke={lightColors.midnight}
        strokeMiterlimit="10"
      />
      <path
        d="M23.11,27.07a16.53,16.53,0,0,0,5.46-5.72A17.42,17.42,0,0,0,29.82,8.1a14.47,14.47,0,0,1,2.12,4,15.34,15.34,0,0,1-1.12,12.31A14.88,14.88,0,0,1,23.18,31a15.13,15.13,0,0,1-7.87.77A15.29,15.29,0,0,1,9,29.15C10.52,29.51,17.07,30.91,23.11,27.07Z"
        transform="translate(-1.76 -1)"
        fill={lightColors.seafoam}
      />
      <path
        d="M8.57,26.49a1.07,1.07,0,0,0,.77-.32L16,19.39l.09.09a.68.68,0,0,0,.46.19h.15a.66.66,0,0,0,.47-.43l.17-.49a7,7,0,0,0,3.75,1.09h.38a7,7,0,0,0,4.61-2.09,7.26,7.26,0,0,0,0-10.14,7,7,0,0,0-10,0,7.28,7.28,0,0,0-1,8.87l-.49.18a.63.63,0,0,0-.41.48.65.65,0,0,0,.17.61l.09.1L7.8,24.61a1.14,1.14,0,0,0,0,1.56A1.07,1.07,0,0,0,8.57,26.49Z"
        transform="translate(-1.76 -1)"
        fill={lightColors.midnight}
      />
      <path
        d="M16.6,8.09a6.29,6.29,0,0,1,9,0,6.54,6.54,0,0,1,0,9.15,6.31,6.31,0,0,1-4.08,1.88L21.25,19c-2.86-1.3-5.16-4.77-4-7.49a3.92,3.92,0,0,1,5.33-2.22,3.45,3.45,0,0,1,1.7,4.51,2.61,2.61,0,0,1-1.46,1.4,2.53,2.53,0,0,1-2,0,2.09,2.09,0,0,1-1-2.72,1.61,1.61,0,0,1,.86-.84,1.54,1.54,0,0,1,1.19,0,1.2,1.2,0,0,1,.6,1.57.86.86,0,0,1-1.15.45A.63.63,0,0,1,21,13.3a.64.64,0,0,1,0-.49.35.35,0,1,0-.63-.29,1.36,1.36,0,0,0,0,1,1.32,1.32,0,0,0,.69.74,1.56,1.56,0,0,0,2.06-.8,1.9,1.9,0,0,0-.95-2.5,2.16,2.16,0,0,0-1.71-.05,2.26,2.26,0,0,0-1.25,1.2,2.79,2.79,0,0,0,1.38,3.65,3.27,3.27,0,0,0,2.53.07A3.34,3.34,0,0,0,25,14.08,4.14,4.14,0,0,0,22.9,8.65a4.58,4.58,0,0,0-6.24,2.57c-1.19,2.71.6,6,3.18,7.78a6.25,6.25,0,0,1-3.24-1.76A6.56,6.56,0,0,1,16.6,8.09Z"
        transform="translate(-1.76 -1)"
        fill="url(#lollipop-gradient)"
      />
      <path
        d="M15.53,17.05a6.3,6.3,0,0,0,.58.68,7.56,7.56,0,0,0,.67.6l-.22.61-1.64-1.66Z"
        transform="translate(-1.76 -1)"
        fill={lightColors.seafoam}
      />
      <path
        d="M8.29,25.1,15,18.32l.56.57L8.85,25.67a.39.39,0,0,1-.56,0,.4.4,0,0,1-.12-.28A.45.45,0,0,1,8.29,25.1Z"
        transform="translate(-1.76 -1)"
        fill={lightColors.seafoam}
      />
      <text
        transform="translate(35.34 22.95) scale(1.11 1)"
        fontSize="24"
        fill={textColor}
        fontFamily="ElenaBasic-Regular, Elena Basic"
      >
        <tspan>WifeSwap</tspan>
      </text>
    </Svg>
  );
};

export default Logo;

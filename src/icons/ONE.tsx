import React from "react";
import { useGlobalSettingsStore } from "../state/global-settings";

function ONEIcon(props: React.SVGProps<SVGSVGElement>) {
  const { darkTheme } = useGlobalSettingsStore();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 80 80"
      fill="none"
    >
      <g clip-path="url(#clip0_4_15)">
        <rect
          x="20.75"
          y="20.75"
          width="38.5"
          height="38.5"
          rx="6.25"
          stroke={darkTheme ? "white" : "black"}
          stroke-width="1.5"
        />
        <line
          x1="59"
          y1="40"
          x2="74"
          y2="40"
          stroke={darkTheme ? "white" : "black"}
          stroke-width="1.5"
        />
        <path
          d="M37.6514 45V43.848H39.6994V36.376L37.5074 37L37.2194 35.88L39.6994 35.08H40.9794V43.848H42.7714V45H37.6514Z"
          fill={darkTheme ? "white" : "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_4_15">
          <rect width="80" height="80" stroke={darkTheme ? "white" : "black"} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ONEIcon;

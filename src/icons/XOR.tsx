import React from "react";
import { useGlobalSettingsStore } from "../state/global-settings";

function XORIcon(props: React.SVGProps<SVGSVGElement>) {
  const { darkTheme } = useGlobalSettingsStore();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M22 23C25.5 28 30.4 41.8 22 57"
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
      <line
        x1="6"
        y1="49.25"
        x2="25"
        y2="49.25"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <line
        x1="6"
        y1="29.25"
        x2="25"
        y2="29.25"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M22 57C33.8333 58 57.8 56 59 40"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M22 23.2C33.8333 22.2 57.8 24.2 59 40.2"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <circle cx="22.025" cy="56.975" r="0.775" fill="black" />
      <circle cx="22.075" cy="23.195" r="0.775" fill="black" />
      <path
        d="M22 23C25.5 28 30.4 41.8 22 57"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M19 23C22.5 28 27.4 41.8 19 57"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <line
        x1="6"
        y1="49.25"
        x2="25"
        y2="49.25"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <line
        x1="6"
        y1="29.25"
        x2="25"
        y2="29.25"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M22 57C33.8333 58 57.8 56 59 40"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M22 23.2C33.8333 22.2 57.8 24.2 59 40.2"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <circle cx="22.025" cy="56.975" r="0.775" fill="black" />
      <circle cx="22.075" cy="23.195" r="0.775" fill="black" />
      <circle
        cx="19.0339"
        cy="23.0469"
        r="0.75"
        transform="rotate(-32.0933 19.0339 23.0469)"
        fill="black"
      />
      <circle
        cx="18.977"
        cy="57.0339"
        r="0.75"
        transform="rotate(32.09 18.977 57.0339)"
        fill="black"
      />
    </svg>
  );
}

export default XORIcon;

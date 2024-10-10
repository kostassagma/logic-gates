import React from "react";
import { useGlobalSettingsStore } from "../state/global-settings";

function NOTIcon(props: React.SVGProps<SVGSVGElement>) {
  const { darkTheme } = useGlobalSettingsStore();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 80 80"
      fill="none"
    >
      <line
        x1="64"
        y1="40"
        x2="74"
        y2="40"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <circle cx="62" cy="40" r="2.5" stroke={darkTheme ? "white" : "black"} />
      <line
        x1="6"
        y1="49.25"
        x2="21"
        y2="49.25"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <line
        x1="6"
        y1="29.25"
        x2="21"
        y2="29.25"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M58.2004 40.2273L21.854 56.8567C21.6884 56.9324 21.5 56.8114 21.5 56.6293V23.3707C21.5 23.1886 21.6884 23.0676 21.854 23.1433L58.2004 39.7727C58.3951 39.8617 58.3951 40.1383 58.2004 40.2273Z"
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
    </svg>
  );
}

export default NOTIcon;

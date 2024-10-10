import React from "react";
import { useGlobalSettingsStore } from "../state/global-settings";

function NANDIcon(props: React.SVGProps<SVGSVGElement>) {
  const { darkTheme } = useGlobalSettingsStore();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M21.75 24C21.75 23.3096 22.3096 22.75 23 22.75H42C51.5269 22.75 59.25 30.4731 59.25 40C59.25 49.5269 51.5269 57.25 42 57.25H23C22.3096 57.25 21.75 56.6904 21.75 56V24Z"
        
        stroke={darkTheme ? "white" : "black"}
        stroke-width="1.5"
      />
      <line x1="64" y1="40" x2="74" y2="40" 
        stroke={darkTheme ? "white" : "black"} stroke-width="1.5" />
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
      <circle cx="62" cy="40" r="2.5" 
        stroke={darkTheme ? "white" : "black"} />
    </svg>
  );
}

export default NANDIcon;

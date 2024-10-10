import { FC } from "react";
import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import { useGlobalSettingsStore } from "../state/global-settings";

const ThemeToggle: FC = () => {
  const { darkTheme, changeDarkTheme } = useGlobalSettingsStore();
  return (
    //@ts-ignore
    <Around
      toggled={darkTheme}
      onToggle={changeDarkTheme}
      duration={750}
      className="z-50 fixed top-5 right-5 rounded-full bg-white dark:bg-black dark:text-white shadow-xl p-2 transition ease-in-out hover:scale-[1.65] scale-150"
    />
  );
};

export default ThemeToggle;

import { createContext, useEffect, useState } from "react";
// import LogicNode from "./gates/implementations/logic-node";
import AddButton from "./components/add-button";
import Background from "./components/background";
import { uselogicGatesStore } from "./state/gates";
import GateComponent from "./gates/gate-component";
import { useGlobalSettingsStore } from "./state/global-settings";
import ThemeToggle from "./components/theme-toggle";
import DisplayComponent from "./gates/diplay-component";
import InputComponent from "./gates/input-component";
import GithubIcon from "./icons/github";

interface CameraContextType {
  x: number;
  y: number;
}

export const CameraContext = createContext({} as CameraContextType);

function App() {
  const [cursorDown, setCursorDown] = useState(false);
  const { gates } = uselogicGatesStore();
  const { moveCamera, darkTheme } = useGlobalSettingsStore();

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (cursorDown) {
        moveCamera({
          x: e.movementX,
          y: e.movementY,
        });
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [cursorDown, moveCamera]);

  return (
    <div
      className={`w-screen h-screen overflow-hidden ${
        darkTheme ? "dark" : "light"
      }`}
    >
      <Background />
      <div
        className={`absolute w-screen h-screen overflow-hidden top-0 left-0 -z-10 ${
          cursorDown ? "cursor-move" : "cursor-auto"
        }`}
        onMouseDown={(e) => {
          e.preventDefault();
          setCursorDown(true);
        }}
        onMouseUp={(e) => {
          e.preventDefault();
          setCursorDown(false);
        }}
      ></div>
      {gates.map((e, i) => {
        if (e.gate == "DISPLAY") {
          return <DisplayComponent {...e} key={i} />;
        } else if (e.gate == "1" || e.gate == "0") {
          return <InputComponent {...e} key={i} />;
        } else {
          return <GateComponent {...e} key={i} />;
        }
      })}
      <AddButton />
      <ThemeToggle />
      <a
        href="https://github.com/kostassagma/logic-gates"
        target="_blank"
        className={`z-50 fixed bottom-5 left-5 rounded-full bg-white dark:bg-black dark:text-gray-300 shadow-xl p-3 transition ease-in-out hover:scale-105`}
      >
        <GithubIcon width={25} height={25} />
      </a>
    </div>
  );
}

export default App;

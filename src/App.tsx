import { createContext, useEffect, useState } from "react";
// import LogicNode from "./gates/implementations/logic-node";
import AddButton from "./components/add-button";
import Background from "./components/background";
import { uselogicGatesStore } from "./state/gates";
import GateComponent from "./gates/gate-component";
import { useGlobalSettingsStore } from "./state/globalSettings";

interface CameraContextType {
  x: number;
  y: number;
}

export const CameraContext = createContext({} as CameraContextType);

function App() {
  const [cursorDown, setCursorDown] = useState(false);
  const { gates, } = uselogicGatesStore();
  const { moveCamera } = useGlobalSettingsStore();

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
    <div className="w-screen h-screen overflow-hidden">
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
        return <GateComponent {...e} key={i} />;
      })}
      <AddButton />
    </div>
  );
}

export default App;

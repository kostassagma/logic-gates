import { createContext, useEffect, useState } from "react";
import LogicNode from "./gates/implementations/logic-node";
import AddButton from "./components/add-button";
import Background from "./components/background";

interface CameraContextType {
  x: number;
  y: number;
}

export const CameraContext = createContext({} as CameraContextType);

function App() {
  const [cursorDown, setCursorDown] = useState(false);
  const [camera, setCamera] = useState({ x: 0, y: 0 });
  const [logicNodes, setLogicNodes] = useState<LogicNode[]>([]);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (cursorDown) {
        setCamera((oldCamera) => ({
          x: oldCamera.x + e.movementX,
          y: oldCamera.y + e.movementY,
        }));
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [cursorDown]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <CameraContext.Provider value={camera}>
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
        {logicNodes.map((e) => {
          return <e.render />;
        })}
        <AddButton setLogicNodes={setLogicNodes} />
      </CameraContext.Provider>
    </div>
  );
}

export default App;

import { FC, useEffect, useState } from "react";
import { GateType } from "./types";
import { uselogicGatesStore } from "../state/gates";
import { useGlobalSettingsStore } from "../state/global-settings";
import GateIcon from "./gate-icon";

// interface Props extends GateType {}

const InputComponent: FC<GateType> = ({ posX, posY, id, gate }) => {
  const { cameraX, cameraY, draggingLine, changeDraggingLine } =
    useGlobalSettingsStore();
  const [cursorDown, setCursorDown] = useState(false);
  const { moveNode, deleteNode } = uselogicGatesStore();

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (cursorDown) {
        moveNode(id, {
          x: e.movementX,
          y: e.movementY,
        });
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [cursorDown]);

  useEffect(() => {
    function onMouseUp() {
      setCursorDown(false);
      changeDraggingLine(false);
    }

    window.addEventListener("mouseup", onMouseUp);

    return () => window.removeEventListener("mouseup", onMouseUp);
  }, []);

  if (gate == "1" || gate == "0") {
    return (
      <div
        className={`z-30 cursor-pointer group absolute flex flex-col ${
          draggingLine ? "hover:shadow-blue-500" : ""
        } `}
        style={{
          left: cameraX + posX,
          top: cameraY + posY,
        }}
      >
        <div className="relative">
          <button
            className={`absolute -top-1 left-14 z-50  rounded-full bg-white shadow-2xl p-1 rotate-45 ml-auto hover:scale-125 transition-all ease-in-out group-hover:visible invisible`}
            onClick={(e) => {
              e.preventDefault();
              deleteNode(id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className=""
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>
          <GateIcon
            gate={gate}
            width={80}
            height={80}
            className="text-white absolute top-0 left-0"
            onMouseDown={(e) => {
              e.preventDefault();
              setCursorDown(true);
            }}
            onMouseUp={(e) => {
              e.preventDefault();
              setCursorDown(false);
            }}
          />
        </div>
      </div>
    );
  }
};

export default InputComponent;

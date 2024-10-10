import { FC, useEffect, useState } from "react";
import { GateType } from "./types";
import { uselogicGatesStore } from "../state/gates";
import { useGlobalSettingsStore } from "../state/global-settings";
import ANDIcon from "../icons/ADD";

// interface Props extends GateType {}

const GateComponent: FC<GateType> = ({ posX, posY, id }) => {
  const { cameraX, cameraY } = useGlobalSettingsStore();
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

  return (
    <div
      className="z-30 cursor-pointer group absolute flex flex-col"
      style={{
        left: cameraX + posX,
        top: cameraY + posY,
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        setCursorDown(true);
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        setCursorDown(false);
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
        <ANDIcon width={80} height={80} className="text-white absolute top-0 left-0" color="" />
      </div>
    </div>
  );
};

export default GateComponent;

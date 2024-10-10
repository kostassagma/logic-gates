import { FC, useEffect, useState } from "react";
import { GateType } from "./types";
import { uselogicGatesStore } from "../state/gates";
import { useGlobalSettingsStore } from "../state/global-settings";
import GateIcon from "./gate-icon";

// interface Props extends GateType {}

const GateComponent: FC<GateType> = ({ posX, posY, id, gate }) => {
  const { cameraX, cameraY } = useGlobalSettingsStore();
  const [cursorDown, setCursorDown] = useState(false);
  const [movingFirst, setMovingFirst] = useState(false);
  const { moveNode, deleteNode } = uselogicGatesStore();
  const [line, setLine] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (cursorDown) {
        moveNode(id, {
          x: e.movementX,
          y: e.movementY,
        });
      }
      if (movingFirst) {
        setLine((prevEnd) => ({
          x: prevEnd.x + e.movementX,
          y: prevEnd.y + e.movementY,
        }));
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [cursorDown, movingFirst]);

  useEffect(() => {
    function onMouseUp() {
      setMovingFirst(false);
      setCursorDown(false);
    }

    window.addEventListener("mouseup", onMouseUp);

    return () => window.removeEventListener("mouseup", onMouseUp);
  }, []);

  useEffect(() => {
    if (!movingFirst) setLine({ x: 0, y: 0 });
  }, [movingFirst]);

  console.log(line);

  return (
    <div
      className="z-30 cursor-pointer group absolute flex flex-col"
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
        <div
          onMouseDown={(e) => {
            e.preventDefault();
            setMovingFirst(true);
          }}
          onMouseUp={(e) => {
            e.preventDefault();
            setMovingFirst(false);
          }}
          className="h-2 w-2 absolute left-[-0.55px] top-[25.2px] border-2 border-blue-600 hover:scale-125 transition ease-out rounded-full z-40"
        />
        <div className="h-2 w-2 absolute left-[-0.55px] top-[45.25px] border-2 border-blue-600 hover:scale-125 transition ease-out rounded-full z-40" />
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
        {movingFirst && (
          <div
            className={` absolute flex flex-row ${
              line.x >= 0 ? "left-[-0.55px]" : "right-[-0.55px]"
            } ${line.y >= 0 ? "top-[29.7px]" : "-bottom-[29.7px]"}`}
            style={{
              width: Math.abs(line.x),
              height: Math.abs(line.y),
              transform:
                line.y >= 0 ? (line.x >= 0 ? "scale(-1, -1)" : "scale(-1, 1)") : line.x >= 0 ? "scale(1, -1)" : "scale(1, 1)",
            }}
          >
            <span
              className={`h-1/3 mb-auto w-full translate-x-[0.5px]  border-t-[1px] border-r-[1px] border-white rounded-tr-full`}
            />
            <span
              className={`h-[34%] mt-auto absolute w-[1px] bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
            />
            <span
              className={`h-1/3 mt-auto w-full -translate-x-[0.5px] border-l-[1px] border-b-[1px] border-white rounded-bl-full`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GateComponent;

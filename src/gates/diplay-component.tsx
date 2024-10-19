import { FC, useEffect, useState } from "react";
import { GateType } from "./types";
import { uselogicGatesStore } from "../state/gates";
import { useGlobalSettingsStore } from "../state/global-settings";
import GateIcon from "./gate-icon";
import { useValue } from "./get-value";

// interface Props extends GateType {}

const DisplayComponent: FC<GateType> = ({ posX, posY, id, gate, inputA }) => {
  const { cameraX, cameraY, draggingLine, changeDraggingLine } =
    useGlobalSettingsStore();
  const [cursorDown, setCursorDown] = useState(false);
  const [movingA, setMovingA] = useState(false);
  const { moveNode, deleteNode, gates, addInputA } = uselogicGatesStore();
  const [lineA, setLineA] = useState({ x: 0, y: 0 });
  const value = useValue(id);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (cursorDown) {
        moveNode(id, {
          x: e.movementX,
          y: e.movementY,
        });
      }
      if (movingA) {
        setLineA((prevEnd) => ({
          x: prevEnd.x + e.movementX,
          y: prevEnd.y + e.movementY,
        }));
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [cursorDown, movingA]);

  useEffect(() => {
    function onMouseUp() {
      setCursorDown(false);
      changeDraggingLine(false);

      if (movingA) {
        gates.forEach((gate) => {
          if (
            gate.posX + 80 >= posX + lineA.x &&
            posX + lineA.x >= gate.posX &&
            gate.posY + 80 >= posY + lineA.y + 40.5 &&
            posY + lineA.y + 40.5 >= gate.posY &&
            gate.id != id
          ) {
            addInputA(id, gate.id);
          }
        });
      }
      setMovingA(false);
    }

    window.addEventListener("mouseup", onMouseUp);

    return () => window.removeEventListener("mouseup", onMouseUp);
  }, [lineA, movingA]);

  useEffect(() => {
    if (!movingA) setLineA({ x: 0, y: 0 });
  }, [movingA]);

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
        <div
          onMouseDown={(e) => {
            e.preventDefault();
            setMovingA(true);
            changeDraggingLine(true);
          }}
          onMouseUp={(e) => {
            e.preventDefault();
            setMovingA(false);
            changeDraggingLine(false);
          }}
          className="h-2 w-2 absolute left-[-0.55px] top-[36px] border-2 border-blue-600 hover:scale-125 transition ease-out rounded-full z-40"
        />
        <GateIcon
          //@ts-ignore
          value={value}
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
        {movingA && <Line line={lineA} />}
        {inputA && (
          <Line
            line={(() => {
              let line;
              gates.forEach((gate) => {
                if (gate.id == inputA) {
                  line = {
                    x: gate.posX - posX + 72,
                    y: gate.posY - posY - 0.75,
                  };
                }
              });
              return line;
            })()}
          />
        )}
      </div>
    </div>
  );
};

export default DisplayComponent;

interface LineProps {
  line?: {
    x: number;
    y: number;
  };
}

const Line: FC<LineProps> = ({ line }) => {
  if (!line) return <></>;
  return (
    <div
      className={`absolute -z-10 flex flex-row ${
        line.x >= 0 ? "left-[-0.55px]" : "right-[-0.55px]"
      } ${line.y >= 0 ? "top-[40.5px]" : "-bottom-[40.5px]"}`}
      style={{
        width: Math.abs(line.x),
        height: Math.abs(line.y),
        transform:
          line.y >= 0
            ? line.x >= 0
              ? "scale(-1, -1)"
              : "scale(-1, 1)"
            : line.x >= 0
            ? "scale(1, -1)"
            : "scale(1, 1)",
      }}
    >
      <span
        className={`h-1/3 mb-auto w-full translate-x-[0.5px]  border-t-[1px] border-r-[1px] border-black dark:border-white rounded-tr-full`}
      />
      <span
        className={`h-[34%] mt-auto absolute w-[1px] bg-black dark:bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      />
      <span
        className={`h-1/3 mt-auto w-full -translate-x-[0.5px] border-l-[1px] border-b-[1px] border-black dark:border-white rounded-bl-full`}
      />
    </div>
  );
};

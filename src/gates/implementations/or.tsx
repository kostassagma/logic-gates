import LogicNode from "./logic-node";
import svgIcon from "../../assets/OR.svg";
import { FC, useContext, useEffect, useState } from "react";
import { CameraContext } from "../../App";

export default class ORGate extends LogicNode {
  inputA?: LogicNode;
  inputB?: LogicNode;

  getValue(): boolean {
    if (!this.inputA?.getValue() || !this.inputB?.getValue())
      throw new Error("No input!");
    return this.inputA.getValue() || this.inputB.getValue();
  }

  render: FC = () => {
    const camera = useContext(CameraContext);
    const [cursorDown, setCursorDown] = useState(false);
    const [pos, setPos] = useState({ x: this.posX, y: this.posY });

    useEffect(() => {
      function onMouseMove(e: MouseEvent) {
        if (cursorDown) {
          setPos((oldPos) => ({
            x: oldPos.x + e.movementX,
            y: oldPos.y + e.movementY,
          }));
        }
      }

      document.addEventListener("mousemove", onMouseMove);

      return () => document.removeEventListener("mousemove", onMouseMove);
    }, [cursorDown]);

    useEffect(() => {
      this.posX = pos.x;
      this.posY = pos.y;
    }, [pos]);

    return (
      <div
        className="z-30 cursor-pointer group absolute w-20 h-20 flex flex-col"
        style={{
          left: camera.x+pos.x,
          top: camera.y+pos.y
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
        <button
          className={`translate-y-6 z-50 bottom-5 right-5 rounded-full bg-white shadow-2xl p-1 rotate-45 ml-auto hover:scale-125 transition-all ease-in-out group-hover:visible invisible`}
          onClick={(e) => {
            e.preventDefault();
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
        <img src={svgIcon} />
      </div>
    );
  };
}

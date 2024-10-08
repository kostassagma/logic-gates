import { FC, useContext } from "react";
import { CameraContext } from "../App";

const Background: FC = () => {
  const { x, y } = useContext(CameraContext);

  return (
    <div className="w-[calc(100vw+20rem)] h-[calc(100vh+20rem)] -z-20 fixed top-0 left-0">
      {new Array(Math.ceil(window.innerWidth / 20)).fill("").map((_, i) => (
        <div
          className={`h-screen w-[1px] bg-gray-200 shadow top-0 fixed`}
          style={{ left: i * 20 + (x % 20) }}
        />
      ))}
      {new Array(Math.ceil(window.innerHeight / 20)).fill("").map((_, i) => (
        <div
          className={`w-screen h-[1px] bg-gray-200 shadow left-0 fixed`}
          style={{ top: i * 20 + (y % 20) }}
        />
      ))}
    </div>
  );
};

export default Background;

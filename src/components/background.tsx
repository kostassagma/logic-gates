import { FC } from "react";
import { useGlobalSettingsStore } from "../state/global-settings";

const Background: FC = () => {
  // const { x, y } = useContext(CameraContext);
  const { cameraX, cameraY } = useGlobalSettingsStore();

  return (
    <div className="w-[calc(100vw+20rem)] h-[calc(100vh+20rem)] -z-20 fixed top-0 left-0 bg-slate-100 dark:bg-slate-700">
      {new Array(Math.ceil(window.innerWidth / 20) + 1).fill("").map((_, i) => (
        <div
          className={`h-screen w-[1px] bg-gray-200 shadow top-0 fixed dark:bg-gray-800 dark:shadow-gray-600`}
          style={{ left: i * 20 + (cameraX % 20) }}
        />
      ))}
      {new Array(Math.ceil(window.innerHeight / 20)).fill("").map((_, i) => (
        <div
          className={`w-screen h-[1px] bg-gray-200 shadow left-0 fixed  dark:bg-gray-800 dark:shadow-gray-600`}
          style={{ top: i * 20 + (cameraY % 20) }}
        />
      ))}
    </div>
  );
};

export default Background;

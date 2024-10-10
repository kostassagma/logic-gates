import { FC, useState } from "react";
// import LogicNode from "../gates/implementations/logic-node";
import { uselogicGatesStore } from "../state/gates";
import { nanoid } from "nanoid";
import { useGlobalSettingsStore } from "../state/global-settings";
import ANDIcon from "../icons/AND";
import ORIcon from "../icons/OR";
import XORIcon from "../icons/XOR";
import NANDIcon from "../icons/NAND";
import NORIcon from "../icons/NOR";
import XNORIcon from "../icons/XNOR";

// interface Props {
//   add: React.Dispatch<React.SetStateAction<LogicNode[]>>;
// }

const AddButton: FC = () => {
  const [adding, setAdding] = useState(false);
  const { cameraX, cameraY } = useGlobalSettingsStore();
  const { add } = uselogicGatesStore();

  function onClick(gate: "AND" | "OR" | "XOR" | "NAND" | "XNOR" | "NOR") {
    add({
      gate,
      id: nanoid(),
      posX: -cameraX + window.innerWidth / 2,
      posY: -cameraY + window.innerHeight / 2,
    });
  }

  return (
    <>
      <div
        className={`w-screen h-screen ${
          adding ? "z-40" : "-z-40"
        } fixed top-0 left-0 ${
          adding ? "backdrop-blur-sm" : "backdrop-blur-none"
        } transition ease-in-out`}
        onClick={(e) => {
          e.preventDefault();
          setAdding(false);
        }}
      />
      <div
        className={`z-50 rounded bg-white dark:bg-black dark:text-white shadow-xl fixed bottom-20 ${
          adding ? "right-5" : "-right-full"
        } transition-all ease-in-out py-1.5 flex flex-col`}
      >
        <button
          className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setAdding(false);
            onClick("AND");
          }}
        >
          <ANDIcon width={40} height={40} />
          <p className="my-auto">And Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setAdding(false);
            onClick("OR");
          }}
        >
          <ORIcon width={40} height={40} />
          <p className="my-auto">Or Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setAdding(false);
            onClick("XOR");
          }}
        >
          <XORIcon width={40} height={40} />
          <p className="my-auto">Xor Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setAdding(false);
            onClick("NAND");
          }}
        >
          <NANDIcon width={40} height={40} />
          <p className="my-auto">Nand Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setAdding(false);
            onClick("NOR");
          }}
        >
          <NORIcon width={40} height={40} />
          <p className="my-auto">Nor Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setAdding(false);
            onClick("XNOR");
          }}
        >
          <XNORIcon width={40} height={40} />
          <p className="my-auto">Xnor Gate</p>
        </button>
      </div>
      <button
        className={`z-50 fixed bottom-5 right-5 rounded-full bg-white dark:bg-black dark:text-gray-300 shadow-xl p-3 transition ease-in-out hover:scale-105 ${
          adding ? "rotate-45" : "rotate-0"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setAdding(!adding);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
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
    </>
  );
};

export default AddButton;

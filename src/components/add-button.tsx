import { FC, useState } from "react";
import LogicNode from "../gates/implementations/logic-node";
import ANDIcon from "../assets/AND.svg";
import ORIcon from "../assets/OR.svg";
import XORIcon from "../assets/XOR.svg";
import NANDIcon from "../assets/NAND.svg";
import NORIcon from "../assets/NOR.svg";
import XNORIcon from "../assets/XNOR.svg";
import ANDGate from "../gates/implementations/and";
import ORGate from "../gates/implementations/or";
import XORGate from "../gates/implementations/xor";
import NANDGate from "../gates/implementations/nand";
import NORGate from "../gates/implementations/nor";
import XNORGate from "../gates/implementations/xnor";

interface Props {
  setLogicNodes: React.Dispatch<React.SetStateAction<LogicNode[]>>;
}

const AddButton: FC<Props> = ({ setLogicNodes }) => {
  const [adding, setAdding] = useState(false);

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
        className={`z-50 rounded bg-white shadow-xl fixed bottom-20 ${
          adding ? "right-5" : "-right-full"
        } transition-all ease-in-out py-1.5 flex flex-col`}
      >
        <button
          className="px-3 py-1.5 hover:bg-gray-100 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setLogicNodes((old) => [...old, new ANDGate()]);
            setAdding(false);
          }}
        >
          <img src={ANDIcon} alt="and" className="h-10 w-10" />
          <p className="my-auto">And Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setLogicNodes((old) => [...old, new ORGate()]);
            setAdding(false);
          }}
        >
          <img src={ORIcon} alt="and" className="h-10 w-10" />
          <p className="my-auto">Or Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setLogicNodes((old) => [...old, new XORGate()]);
            setAdding(false);
          }}
        >
          <img src={XORIcon} alt="and" className="h-10 w-10" />
          <p className="my-auto">Xor Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setLogicNodes((old) => [...old, new NANDGate()]);
            setAdding(false);
          }}
        >
          <img src={NANDIcon} alt="and" className="h-10 w-10" />
          <p className="my-auto">NAND Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setLogicNodes((old) => [...old, new NORGate()]);
            setAdding(false);
          }}
        >
          <img src={NORIcon} alt="and" className="h-10 w-10" />
          <p className="my-auto">Nor Gate</p>
        </button>
        <button
          className="px-3 py-1.5 hover:bg-gray-100 transition-all ease-in-out flex flex-row gap-1"
          onClick={(e) => {
            e.preventDefault();
            setLogicNodes((old) => [...old, new XNORGate()]);
            setAdding(false);
          }}
        >
          <img src={XNORIcon} alt="and" className="h-10 w-10" />
          <p className="my-auto">Xnor Gate</p>
        </button>
      </div>
      <button
        className={`z-50 fixed bottom-5 right-5 rounded-full bg-white shadow-xl p-3 transition ease-in-out hover:scale-105 ${
          adding ? "rotate-45" : "rotate-0"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setAdding(!adding);
          // setLogicNodes((prev) => [...prev, new ANDGate()]);
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

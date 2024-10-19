import { FC } from "react";
import ANDIcon from "../icons/AND";
import ORIcon from "../icons/OR";
import XORIcon from "../icons/XOR";
import NANDIcon from "../icons/NAND";
import NORIcon from "../icons/NOR";
import XNORIcon from "../icons/XNOR";
import ONEIcon from "../icons/ONE";
import ZEROIcon from "../icons/ZERO";
import DISPLAYIcon from "../icons/DISPLAY";

interface Props extends React.SVGProps<SVGSVGElement> {
  gate: string;
}

const GateIcon: FC<Props> = (props) => {
  switch (props.gate) {
    case "AND":
      return (
        <ANDIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
    case "OR":
      return (
        <ORIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
    case "XOR":
      return (
        <XORIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
    case "NAND":
      return (
        <NANDIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
    case "NOR":
      return (
        <NORIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
    case "XNOR":
      return (
        <XNORIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
    case "1":
      return (
        <ONEIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
    case "0":
      return (
        <ZEROIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
    case "DISPLAY":
      return (
        <DISPLAYIcon
          {...props}
          width={80}
          height={80}
          className="text-white absolute top-0 left-0"
          color=""
        />
      );
  }
  return (
    <ANDIcon
      width={80}
      height={80}
      className="text-white absolute top-0 left-0"
      color=""
    />
  );
};

export default GateIcon;

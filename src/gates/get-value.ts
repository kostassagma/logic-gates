import { uselogicGatesStore } from "../state/gates";
import { GateType } from "./types";

export function useValue(id: string): "1" | "0" | undefined {
  const { gates } = uselogicGatesStore();
  try {
    return getValue(gates, id) ? "1" : "0";
  } catch (err) {
    return;
  }
}

function getValue(gates: GateType[], id?: string): boolean {
  if (!id) throw new Error();
  let gateArr = gates.filter((_gate) => {
    return _gate.id === id;
  });

  if (!gateArr[0]) throw new Error("");

  const gate = gateArr[0];

  switch (gate.gate) {
    case "AND":
      return getValue(gates, gate.inputA) && getValue(gates, gate.inputB);
      break;
    case "OR":
      return getValue(gates, gate.inputA) || getValue(gates, gate.inputB);
      break;
    case "XOR":
      return getValue(gates, gate.inputA) != getValue(gates, gate.inputB);
      break;
    case "NAND":
      return !(getValue(gates, gate.inputA) && getValue(gates, gate.inputB));
      break;
    case "NOR":
      return !(getValue(gates, gate.inputA) || getValue(gates, gate.inputB));
      break;
    case "AND":
      return getValue(gates, gate.inputA) == getValue(gates, gate.inputB);
      break;
    case "1":
      return true;
      break;
    case "0":
      return false;
      break;
    case "DISPLAY":
      return getValue(gates, gate.inputA);
      break;
    default:
      return true;
      break;
  }
}

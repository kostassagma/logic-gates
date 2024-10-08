import { FC } from "react";

export default class LogicNode {
  posX: number;
  posY: number;
  // getScreenPos: () => { x: number; y: number };

  constructor() {
    this.posY = 100;
    this.posX = 100;
  }

  getValue(): boolean {
    throw new Error("Not implemented!");
    return false;
  }

  render: FC = () => {
    throw new Error("Not implemented!");
    return <div></div>;
  };
}

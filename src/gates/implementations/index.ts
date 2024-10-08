import LogicNode from "./logic-node";

export class NOTGate extends LogicNode {
  input?: LogicNode;

  getValue(): boolean {
    if (!this.input) throw new Error("No input!");
    return !this.input.getValue();
  }
}

// export class ANDGate extends LogicNode {
//   inputA?: LogicNode;
//   inputB?: LogicNode;

//   getValue(): boolean {
//     if (!this.inputA?.getValue() || !this.inputB?.getValue())
//       throw new Error("No input!");
//     return this.inputA.getValue() && this.inputB.getValue();
//   }
// }

// export class ORGate extends LogicNode {
//   inputA?: LogicNode;
//   inputB?: LogicNode;

//   getValue(): boolean {
//     if (!this.inputA?.getValue() || !this.inputB?.getValue())
//       throw new Error("No input!");
//     return this.inputA.getValue() || this.inputB.getValue();
//   }
// // }

// export class XORGate extends LogicNode {
//   inputA?: LogicNode;
//   inputB?: LogicNode;

//   getValue(): boolean {
//     if (!this.inputA?.getValue() || !this.inputB?.getValue())
//       throw new Error("No input!");
//     return this.inputA.getValue() != this.inputB.getValue();
//   }
// }

// export class NANDGate extends LogicNode {
//   inputA?: LogicNode;
//   inputB?: LogicNode;

//   getValue(): boolean {
//     if (!this.inputA?.getValue() || !this.inputB?.getValue())
//       throw new Error("No input!");
//     return !(this.inputA.getValue() && this.inputB.getValue());
//   }
// }

// export class XNORGate extends LogicNode {
//   inputA?: LogicNode;
//   inputB?: LogicNode;

//   getValue(): boolean {
//     if (!this.inputA?.getValue() || !this.inputB?.getValue())
//       throw new Error("No input!");
//     return !(this.inputA.getValue() != this.inputB.getValue());
//   }
// }

// export class NORGate extends LogicNode {
//   inputA?: LogicNode;
//   inputB?: LogicNode;

//   getValue(): boolean {
//     if (!this.inputA?.getValue() || !this.inputB?.getValue())
//       throw new Error("No input!");
//     return !(this.inputA.getValue() || this.inputB.getValue());
//   }
// }

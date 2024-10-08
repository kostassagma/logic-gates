export type NodeType = {
  getValue: () => boolean;
  posX: number;
  posY: number;
  getScreenPos: () => { x: number; y: number };
};

export interface NOT extends NodeType {
  input?: NodeType;
}

export interface ANDGateType extends NodeType {
  inputA?: NodeType;
  inputB?: NodeType;
}

export interface ORGateType extends NodeType {
  inputA?: NodeType;
  inputB?: NodeType;
}

export interface XORGateType extends NodeType {
  inputA?: NodeType;
  inputB?: NodeType;
}

export interface NANDGateType extends NodeType {
  inputA?: NodeType;
  inputB?: NodeType;
}

export interface XNORGateType extends NodeType {
  inputA?: NodeType;
  inputB?: NodeType;
}

export interface NORGateType extends NodeType {
  inputA?: NodeType;
  inputB?: NodeType;
}

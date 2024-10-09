import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { GateType } from "../gates/types";

interface LogicGatesState {
  gates: GateType[];
  add: (node: GateType) => void;
  reset: () => void;
  moveNode: (id: string, by: { x: number; y: number }) => void;
  deleteNode: (id: string) => void;
}

export const uselogicGatesStore = create<LogicGatesState>()(
  devtools(
    persist(
      (set) => ({
        gates: [],
        add: (node) => set((state) => ({ gates: [...state.gates, node] })),
        reset: () => {
          set({ gates: [] });
        },
        moveNode: (id: string, by: { x: number; y: number }) => {
          set((state) => ({
            gates: [
              ...state.gates.map((e) => {
                if (e.id == id) {
                  return {
                    ...e,
                    posX: e.posX + by.x,
                    posY: e.posY + by.y,
                  };
                } else return e;
              }),
            ],
          }));
        },
        deleteNode: (id: string) => {
          set((state) => ({
            gates: [
              ...state.gates.filter((e) => {
                if (e.id == id) {
                  return false;
                } else return true;
              }),
            ],
          }));
        },
      }),
      {
        name: "gates-storage",
      }
    )
  )
);

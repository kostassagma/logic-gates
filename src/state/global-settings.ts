import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface GlobalSettingsType {
  cameraX: number;
  cameraY: number;
  moveCamera: (by: { x: number; y: number }) => void;
  darkTheme: boolean;
  changeDarkTheme: (toggled: boolean) => void;
}

export const useGlobalSettingsStore = create<GlobalSettingsType>()(
  devtools(
    persist(
      (set) => ({
        cameraX: 0,
        cameraY: 0,
        moveCamera: (by: { x: number; y: number }) => {
          set((state) => ({
            cameraX: state.cameraX + by.x,
            cameraY: state.cameraY + by.y,
          }));
        },
        darkTheme: false,
        changeDarkTheme: (toggled: boolean) => {
          set(() => ({
            darkTheme: toggled,
          }));
        },
      }),
      {
        name: "global-storage",
      }
    )
  )
);

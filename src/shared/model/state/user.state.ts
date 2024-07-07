import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IUserState {
  balance: number;
  setBalance: (newValue: number) => void;
}

export const useUserState = create<IUserState>()(
  devtools(
    (set) => ({
      balance: 100,
      setBalance: (newValue: number) => {
        set({ balance: newValue });
      },
    }),
    { name: "userState" }
  )
);

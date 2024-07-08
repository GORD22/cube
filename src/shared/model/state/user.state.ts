import { TError } from "@/app/api/types";
import { userAPI } from "@/shared/api/userAPI/user.api";
import { ILoginData, IUser } from "@/shared/api/userAPI/user.types";
import { AxiosError } from "axios";
import Cookies from "universal-cookie";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IUserState {
  isAuth: boolean;
  user: IUser | null;
  balance: number;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (userData: IUser) => void;
  setBalance: (newValue: number) => void;
  login: (loginData: ILoginData) => Promise<void>;
  me: () => Promise<void>;
}

const cookies = new Cookies();

export const useUserState = create<IUserState>()(
  devtools(
    (set) => ({
      isAuth: false,
      user: null,
      balance: 100,
      setIsAuth: (isAuth: boolean) => {
        set({ isAuth: isAuth });
      },
      setUser: (userData: IUser) => {
        set({ user: userData });
      },
      setBalance: (newValue: number) => {
        set({ balance: newValue });
      },
      login: async (loginData: ILoginData) => {
        try {
          const response = await userAPI.login(loginData);
          cookies.set("userData", response.data);
          set({ user: response.data, isAuth: true });
        } catch (error) {
          const err = error as AxiosError<TError>;
          throw new Error(err.response?.data.message);
        }
      },
      me: async () => {
        const response = await userAPI.me();
        set({ user: response.data });
      },
    }),
    { name: "userState" }
  )
);

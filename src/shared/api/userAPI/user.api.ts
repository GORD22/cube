import { instance } from "@/app/api/api";
import { ILoginData, IUser } from "./user.types";

export const userAPI = {
  async login(loginData: ILoginData) {
    const response = await instance.post<IUser>("client-login", loginData);
    return response;
  },
  async me() {
    const response = await instance.get<IUser>("/auth/me");
    return response;
  },
};

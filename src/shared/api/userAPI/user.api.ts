import { instance } from "@/app/api/api";
import { ILoginData } from "./user.types";

export const userAPI = {
  async login(loginData: ILoginData) {
    const response = await instance.post("client-login", loginData);
    return response;
  },
};

import { BASE_URL } from "@/shared/constants";
import axios from "axios";

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://talkative-backend-portion.onrender.com" : "/api",
  withCredentials: true,
});
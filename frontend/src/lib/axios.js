// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api",
//   withCredentials: true,
// });

import axios from "axios";
const backendURL = import.meta.env.MODE === "development"
  ? "http://localhost:3000/api"
  : "https://talkative-backend-portion.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: backendURL,
  withCredentials: true,
});

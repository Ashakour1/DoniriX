import axios from "axios";

const BASE_URL = "https://lifecord.onrender.com/api";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

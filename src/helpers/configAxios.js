import axios from "axios";

const BASE_URL = "https://my-blog-kfgs.vercel.app/";
const TEST_URL = "http://localhost:8000/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const testRequest = axios.create({
  baseURL: TEST_URL,
  withCredentials: true,
});

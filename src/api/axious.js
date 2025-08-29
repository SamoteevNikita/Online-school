import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // позже заменим на реальное API
  withCredentials: true,
});

export default api;

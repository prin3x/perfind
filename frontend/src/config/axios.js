import axios from "axios";
import localStorageService from "../services/LocalStorageService";
import { BASE_BACKEND_URL } from "./constants";

axios.defaults.baseURL = BASE_BACKEND_URL;

axios.interceptors.request.use((config) => {
  if (config.url.match(/ \/login|\/register /)) return config;

  const token = localStorageService.getToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axios;

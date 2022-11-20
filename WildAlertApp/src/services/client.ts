import axios, { type AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://wild-alert-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default apiClient;

import axios, { type AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://wild-alert-api.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
export default apiClient;

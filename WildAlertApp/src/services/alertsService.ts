import http from "./client";
import type { AlertResponse } from "@/models/AlertResponse";
import type { AxiosPromise } from "axios";

class alertsService {
  get(): AxiosPromise<AlertResponse[]> {
    return http.get("/Alerts");
  }
}

export default new alertsService();

import http from "./client";
import type { AlertResponse } from "@/models/AlertResponse";

class alertsService {
  get(): Promise<AlertResponse> {
    return http.get("/Alerts");
  }
}

export default new alertsService();

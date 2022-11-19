import http from "./client";
import type { AlertResponse } from "@/models/AlertResponse";
import type { AxiosPromise } from "axios";
import type { AlertRequest } from "@/models/AlertRequest";

class alertsService {
  get(longitude: number, latitude: number, radius: number): AxiosPromise<AlertResponse[]> {
    return http.get("/Alerts", {
      params: {
        Longitude: longitude,
        Latitude: latitude,
        Radius: radius,
      },
    });
  }
  post(request: AlertRequest): AxiosPromise<AlertResponse> {
    return http.post("/Alerts", request);
  }
}

export default new alertsService();

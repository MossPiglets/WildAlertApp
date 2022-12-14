import type { Animal } from "./Animal";

export type AlertResponse = {
  id: string;
  createdAt: string;
  longitude: number;
  latitude: number;
  comments: string;
  animal: Animal;
};

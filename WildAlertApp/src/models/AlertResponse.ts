import type { Animal } from "./Animal";

export type AlertResponse = {
  longitude: number;
  latitude: number;
  comments: string;
  animal: Animal;
};

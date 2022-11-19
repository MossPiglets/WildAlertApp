import type { Animal } from "./Animal";

export type AlertRequest = {
  longitude: number;
  latitude: number;
  comments: string;
  animal: Animal;
};

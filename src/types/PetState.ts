import { Pet } from "./Pet";

export interface PetState {
  pets: Pet[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

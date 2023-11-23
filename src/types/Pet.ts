import { Species } from "./Species";

export interface Pet {
  id: string;
  name: string;
  species: Species;
  available: boolean;
  birthYear: string;
  dateAdded: Date;
  photoUrl: string;
}

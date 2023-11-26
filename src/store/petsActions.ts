import { useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Pet } from "../types/Pet";
import { RootState } from "./store";

export interface SetPetsAction {
  type: "SET_PETS";
  payload: Pet[];
}

export const setPets = (pets: Pet[]): SetPetsAction => ({
  type: "SET_PETS",
  payload: pets,
});

export const getAllPets =
  (): ThunkAction<void, RootState, unknown, Action<string>> => async () => {
    const dispatch = useDispatch();
    try {
      const response = await fetch(
        "https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets",
      );
      const pets = await response.json();
      dispatch(setPets(pets));
      return;
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

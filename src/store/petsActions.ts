import { useDispatch } from "react-redux";
import { Pet } from "../types/Pet";

interface SetPetsAction {
  type: "SET_PETS";
  payload: any[];
}

export const setPets = (pets: Pet[]): SetPetsAction => ({
  type: "SET_PETS",
  payload: pets,
});


export const getAllPets = () => async () => {
  const dispatch = useDispatch();
  try {
    const response = await fetch("https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets"); 
    const pets = await response.json();
    dispatch(setPets(pets));
    return;
  } catch (error) {
    console.error("Error fetching pets:", error);
  }
};

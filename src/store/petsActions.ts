import { useDispatch } from "react-redux";

interface SetPetsAction {
  type: "SET_PETS";
  payload: any[];
}

interface SetFilterAction {
  type: "SET_FILTER";
  payload: string;
}

export const setPets = (pets: any[]): SetPetsAction => ({
  type: "SET_PETS",
  payload: pets,
});

export const setFilter = (filter: string): SetFilterAction => ({
  type: "SET_FILTER",
  payload: filter,
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

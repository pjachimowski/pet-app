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

export const fetchPets = () => async () => {
  const dispatch = useDispatch();
  try {
    const response = await fetch("https://api.example.com/pets"); // replace with your API endpoint
    const pets = await response.json();
    dispatch(setPets(pets));
  } catch (error) {
    console.error("Error fetching pets:", error);
  }
};

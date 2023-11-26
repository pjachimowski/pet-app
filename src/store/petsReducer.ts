import { Pet } from "../types/Pet";
import { SetPetsAction } from "./petsActions";

interface PetsState {
  data: Pet[];
}

const initialState: PetsState = {
  data: [],
};

const petsReducer = (
  state = initialState,
  action: SetPetsAction,
): PetsState => {
  switch (action.type) {
    case "SET_PETS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default petsReducer;

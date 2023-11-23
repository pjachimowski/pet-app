import { Pet } from "../types/Pet";

interface PetsState {
  data: Pet[];
  filter: string;
}

const initialState: PetsState = {
  data: [],
  filter: "",
};

const petsReducer = (state = initialState, action: any): PetsState => {
  switch (action.type) {
    case "SET_PETS":
      return { ...state, data: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default petsReducer;

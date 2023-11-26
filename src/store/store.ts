import { configureStore } from "@reduxjs/toolkit";
import { PetState } from "../types/PetState";
import petReducer from "./petSlice";

export interface RootState {
  pets: PetState;
  // Add other slices of the state as needed
}

const store = configureStore({
  reducer: petReducer,
});

export default store;

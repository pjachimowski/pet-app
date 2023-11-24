import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Pet } from '../types/Pet';


interface PetState {
  pets: Pet[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PetState = {
  pets: [],
  status: 'idle',
  error: null,
};


export const getAllPets = createAsyncThunk('pets/getAllPets', async () => {
  const response = await fetch('https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets');
  const data = await response.json();
  return data;
});

const petSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllPets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pets = action.payload;
      })
      .addCase(getAllPets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Error fetching pets';
      });
  },
});


export default petSlice.reducer;


import { configureStore } from '@reduxjs/toolkit';
import petReducer from './petSlice';

interface RootState {
  pets: {
    data: any[];
    filter: string;
  };
}

const store = configureStore({
  reducer: {
    pets: petReducer,
  },
});

export default store;

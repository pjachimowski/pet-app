import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/petsActions";

interface RootState {
  pets: {
    data: any[];
    filter: string;
  };
}

export const usePetData = () => {
  const petData = useSelector((state: RootState) => state.pets.data);
  const filter = useSelector((state: RootState) => state.pets.filter);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  const setFilterValue = (value: string) => {
    dispatch(setFilter(value));
  };

  return { petData, filter, setFilter: setFilterValue };
};

import React, { useEffect } from "react";
import "./App.css";
import Footer from "./presentation/Footer";
import Navbar from "./presentation/Navbar";
import PetCategories from "./presentation/PetCategories";
import PetDirectory from "./presentation/PetDirectory";
import PetList from "./presentation/PetList";
import Title from "./presentation/Title";
import { getAllPets } from "./store/petSlice";
import { useDispatch, useSelector } from "react-redux";
import { PetState } from "./types/PetState";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "./store/store";

function App() {
  const dispatch: ThunkDispatch<RootState, any, any> = useDispatch();

  const pets = useSelector((state: PetState) => state.pets);
  const status = useSelector((state: PetState) => state.status);
  const error = useSelector((state: PetState) => state.error);

  useEffect(() => {
    dispatch(getAllPets());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Navbar />
      <div id="app-content">
        <header>
          <Title className={"header"} text={"Pets"} />
        </header>
        <PetList pets={pets} />
        <PetDirectory />
        <PetCategories />
      </div>
      <Footer />
    </>
  );
}

export default App;

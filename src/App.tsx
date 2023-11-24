import React, { useEffect } from "react";
import "./App.css";
import Footer from "./presentation/Footer";
import Navbar from "./presentation/Navbar";
import PetCategories from "./presentation/PetCategories";
import PetDirectory from "./presentation/PetDirectory";
import PetList from "./presentation/PetList";
import Title from "./presentation/Title";
import { getAllPets } from './store/petSlice';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const pets = useSelector((state: any) => state.pets.pets);
  const status = useSelector((state: any) => state.pets.status);
  const error = useSelector((state: any) => state.pets.error);

  console.log("pets", pets)

  useEffect(() => {
    dispatch(getAllPets() as any);
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
 

  return (
    <>
      <Navbar />
      <div id="app-content">
        <Title style={"header"} text={"Pets"} />
        <PetList pets={pets}/>
        <PetDirectory />
        <PetCategories />
      </div>
      <Footer />
    </>
  );
}

export default App;

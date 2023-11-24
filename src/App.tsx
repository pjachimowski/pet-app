import React from "react";
import "./App.css";
import Footer from "./presentation/Footer";
import Header from "./presentation/Header";
import Navbar from "./presentation/Navbar";
import PetCategories from "./presentation/PetCategories";
import PetDirectory from "./presentation/PetDirectory";
import PetList from "./presentation/PetList";
import { Pet } from "./types/Pet";
import { Species } from "./types/Species";

function App() {
  const pet: Pet = { id: "1", species: Species.DOG, available: true };

  return (
    <div id="app">
      <Navbar />
      <div id="app-content">
        <Header />
        <PetList />
        <PetDirectory pet={pet} />
        <PetCategories />
      </div>
      <Footer />
    </div>
  );
}

export default App;

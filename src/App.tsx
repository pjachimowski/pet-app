import React from "react";
import "./App.css";
import Footer from "./presentation/Footer";
import Header from "./presentation/Header";
import Navbar from "./presentation/Navbar";
import PetCategories from "./presentation/PetCategories";
import PetDirectory from "./presentation/PetDirectory";
import PetList from "./presentation/PetList";
import { Pet } from "./types/Pet";

function App() {
  const pet: Pet = {
    id: 1,
    name: "Daamin",
    species: "Cat",
    available: false,
    birthYear: 2012,
    dateAdded: "19-06-2021",
    photoUrl: "https://i.imgur.com/wpfirW7l.jpg",
  };

  return (
    <div id="app">
      <Navbar />
      <div id="app-content">
        <Header text={"Pets"} />
        <PetList />
        <PetDirectory pet={pet} />
        <PetCategories />
      </div>
      <Footer />
    </div>
  );
}

export default App;

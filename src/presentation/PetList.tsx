import React from "react";
import { usePetData } from "../hooks/usePetData";
import { Pet } from "../types/Pet";
import PetCard from "./PetCard";
import PetFilter from "./PetFilter";
import SubHeader from "./SubHeader";

function PetList() {
  // const { petData, filter, setFilter } = usePetData();

  // const filteredPets = petData.filter((pet: Pet) => {
  // pet search logic
  // console.log("pet", pet);
  // });
  const filteredPetsMock = [
    {
      id: 1,
      name: "Daamin",
      species: "Cat",
      available: false,
      birthYear: 2012,
      dateAdded: "19-06-2021",
      photoUrl: "https://i.imgur.com/wpfirW7l.jpg",
    },
    {
      id: 2,
      name: "Dann",
      species: "Dog",
      available: true,
      birthYear: 2016,
      dateAdded: "01-01-2022",
      photoUrl: "https://i.imgur.com/ES0AHRxl.jpg",
    },
    {
      id: 3,
      name: "Annemie",
      species: "Dog",
      available: true,
      birthYear: 2008,
      dateAdded: "25-04-2021",
      photoUrl: "https://i.imgur.com/cL9Su9ql.jpg",
    },
  ];

  return (
    <div className="standardMarginTop">
      <PetFilter filter={""} setFilter={() => {}} />
      <div>
        <SubHeader text={"Results"} />
        {filteredPetsMock.map((pet: Pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;

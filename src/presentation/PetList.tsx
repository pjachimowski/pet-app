import React from "react";
import { usePetData } from "../hooks/usePetData";
import { Pet } from "../types/Pet";
import { Species } from "../types/Species";
import PetCard from "./PetCard";
import PetFilter from "./PetFilter";

function PetList() {
  // const { petData, filter, setFilter } = usePetData();

  // const filteredPets = petData.filter((pet: Pet) => {
    // pet search logic
    // console.log("pet", pet);
  // });
 const filteredPetsMock = [{ id: "1", species: Species.DOG, available: true }, { id: "2", species: Species.DOG, available: true }, { id: "3", species: Species.DOG, available: true }]

  return (
    <div>
      <PetFilter filter={''} setFilter={()=>{}} />
      <div>
        {filteredPetsMock.map((pet: Pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;

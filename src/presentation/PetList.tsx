import React from "react";
import { usePetData } from "../hooks/usePetData";
import { Pet } from "../types/Pet";
import PetCard from "./PetCard";
import PetFilter from "./PetFilter";

function PetList() {
  const { petData, filter, setFilter } = usePetData();

  const filteredPets = petData.filter((pet: Pet) => {
    // pet search logic
    console.log("pet", pet);
  });

  return (
    <div>
      <PetFilter filter={filter} setFilter={setFilter} />
      <div>
        {filteredPets.map((pet: Pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;

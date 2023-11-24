import React, { useState } from "react";
import { Pet } from "../types/Pet";
import PetCard from "./PetCard";
import PetFilter from "./PetFilter";
import Title from "./Title";

interface Props { 
  pets: Pet[]
}

function PetList(props: Props) {
 const {pets} = props;
 const [searchTerm, setSearchTerm] = useState('');
 const [searchResults, setSearchResults] = useState(pets);

 const handleSearch = (term: any) => {
  setSearchTerm(term);

  // Filter the data based on the search term
  const filteredResults = pets.filter((pet) =>
    pet.name?.toLowerCase().includes(term.toLowerCase())
  );

  setSearchResults(filteredResults);
};

  return (
    <div className="bigMarginTop">
      <PetFilter value={searchTerm} handleSearch={handleSearch} />
      <Title style={"subheader bigMarginTop"} text={"Results"} />
      <div className="cardList">
        {searchResults.map((pet: Pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;

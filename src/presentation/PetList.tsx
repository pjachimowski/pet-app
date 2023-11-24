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

 const levenshteinDistance = (a: any, b: any) => {
  const dp = Array.from(Array(a.length + 1), () => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0),
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1
        );
      }
    }
  }

  return dp[a.length][b.length];
}

 const handleSearch = (term: any) => {
  setSearchTerm(term);
  if(term.length <= 2){
    return;
  }

  // Perform strict search
  // const filteredResults = pets.filter((pet) =>
  //   pet.name?.toLowerCase().includes(term.toLowerCase())
  // );

  // Perform the fuzzy search
  const filteredResults = pets.filter((item) => {
    const itemName = item.name?.toLowerCase();
    if(itemName && itemName.length){
      const distance = levenshteinDistance(term, itemName);
      const similarity = 1 - distance / Math.max(term.length, itemName.length);
      return similarity > 0.25; // Adjust the threshold as needed
    }
  });

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

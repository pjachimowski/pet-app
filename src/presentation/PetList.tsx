import React, { useState } from "react";
import { Pet } from "../types/Pet";
import { levenshteinDistance } from "../utils/filterUtils";
import Button from "./Button";
import PetCard from "./PetCard";
import PetFilter from "./PetFilter";
import Title from "./Title";

interface Props {
  pets: Pet[];
}

function PetList(props: Props) {
  const { pets } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(pets);
  const [displayCount, setDisplayCount] = useState(3);

  const sortByDateAdded = () => {
    const compareByDateAdded = (a: Pet, b: Pet): number => {
      const dateA = new Date(a.dateAdded!.split("-").reverse().join("-"));
      const dateB = new Date(b.dateAdded!.split("-").reverse().join("-"));

      return dateB.getTime() - dateA.getTime();
    };

    const sortedPets = pets.slice().sort(compareByDateAdded);

    setSearchResults(sortedPets);
  };

  const handleSeeMore = () => {
    setDisplayCount(displayCount + 3);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length <= 2) {
      setSearchResults(pets);
    } else {
      const filteredResults = pets.filter((item) => {
        const itemName = item.name?.toLowerCase();
        const itemSpecies = item.species?.toLowerCase();

        if (itemName && itemSpecies) {
          const nameDistance = levenshteinDistance(term, itemName);
          const nameSimilarity =
            1 - nameDistance / Math.max(term.length, itemName.length);

          const speciesDistance = levenshteinDistance(term, itemSpecies);
          const speciesSimilarity =
            1 - speciesDistance / Math.max(term.length, itemSpecies.length);

          const nameCondition = nameSimilarity > 0.25; // Adjust the threshold as needed
          const speciesCondition = speciesSimilarity > 0.25; // Adjust the threshold as needed

          return nameCondition || speciesCondition;
        }
      });

      setSearchResults(filteredResults);
    }
  };

  return (
    <div className="big-margin-top" aria-label="Search Results">
      <PetFilter
        value={searchTerm}
        handleSearch={handleSearch}
        aria-label="Pet Filter"
        sortByDateAdded={sortByDateAdded}
      />
      <Title
        className={"subheader big-margin-top"}
        text={"Results"}
        aria-label="Results Subheader"
      />
      <ul className="card-list" aria-label="List of Search Results">
        {searchResults.slice(0, displayCount).map((pet: Pet) => (
          <li
            key={pet.id}
            aria-label={`Pet ${pet.name} Card`}
            className="pet-card__container"
          >
            <PetCard pet={pet} />
          </li>
        ))}
      </ul>
      <section className="see-more-section">
        {displayCount < searchResults.length && (
          <button className="see-more-button width-sm" onClick={handleSeeMore}>
            <span>See more</span>
          </button>
        )}
      </section>
    </div>
  );
}

export default PetList;

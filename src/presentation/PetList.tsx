import React from "react";
import { Pet } from "../types/Pet";
import PetCard from "./PetCard";
import PetFilter from "./PetFilter";
import Title from "./Title";

interface Props { 
  pets: Pet[]
}

function PetList(props: Props) {
 const {pets} = props;
 

  return (
    <div className="bigMarginTop">
      <PetFilter filter={""} setFilter={() => {}} />
      <Title style={"subheader bigMarginTop"} text={"Results"} />
      <div className="cardList">
        {pets.map((pet: Pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;

import React from "react";
import { Pet } from "../types/Pet";
import Button from "./Button";
import Title from "./Title";


interface Props {
  pet: Pet;
}

function PetCard(props: Readonly<Props>) {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  const { pet } = props;

  return (
    <div className="standardMarginTop petCard">
      <div className="petImageContainer">
        <img className="petImage" src={pet.photoUrl} alt="Logo" />
      </div>
      <Title style={"title"} text={pet.name!} />
      <Button
        title={isMobile ? "" : "Visit"}
        className="petButton standardMarginTop"
        onClick={() => console.log("CLICK!")}
      />
    </div>
  );
}

export default PetCard;

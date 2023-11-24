import React from "react";
import { Pet } from "../types/Pet";
import Button from "./Button";
import Title from "./Title";

interface Props {
  pet: Pet;
}

function PetCard(props: Readonly<Props>) {
  const { pet } = props;

  return (
    <div className="standardMarginTop">
      <div className="petImageContainer">
        <img className="petImage" src={pet.photoUrl} alt="Logo" />
      </div>
      <Title text={pet.name!} />
      <Button
        title="View"
        className='petButton'
        onClick={() => console.log("CLICK!")}
      /> 
    </div>
  );
}

export default PetCard;

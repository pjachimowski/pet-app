import React from "react";
import { Pet } from "../types/Pet";

interface Props {
  pet: Pet;
}

function PetCard(props: Readonly<Props>) {
  const { pet } = props;

  console.log("pet", pet);

  return <div>I am a Pet Card</div>;
}

export default PetCard;

import React from "react";
import { Pet } from "../types/Pet";

interface Props {
  pet: Pet;
}

function PetDirectory(props: Readonly<Props>) {
  const { pet } = props;

  console.log("pet", pet);

  return <div>I am a Pet Directory</div>;
}

export default PetDirectory;

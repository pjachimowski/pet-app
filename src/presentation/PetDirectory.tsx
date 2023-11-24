import React from "react";
import { Pet } from "../types/Pet";
import Button from "./Button";
import Title from "./Title";

interface Props {
  pet: Pet;
}

function PetDirectory(props: Readonly<Props>) {
  const { pet } = props;

  console.log("pet", pet);

  return (
    <div className="directoryContainer standardMarginTop">
      <div className="directoryLeftContainer">
        <img className="directoryLeft"  src={"/images/treats.jpeg"} alt="treats" />
      </div>
      <div className="directoryRight">
      <Title style={'header'} text={"Pets directory"} />
      <Title text={"See all pets available for adoption, promote them and get them a home"} />
      <Button
        title="View"
        className="directoryButton standardMarginTop"
        onClick={() => console.log("CLICK!")}
      />
      </div>
    </div>
  );
}

export default PetDirectory;

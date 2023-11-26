import React from "react";
import Button from "./Button";
import Title from "./Title";

function PetDirectory() {
  return (
    <div className="directory big-margin-top" aria-label="Pets Directory">
      <div className="directory-left__container width-lg">
        <img
          className="image-cover"
          src={"/images/treats.jpeg"}
          alt="treats"
          aria-label="Image of treats"
        />
      </div>
      <div className="directory-right">
        <Title
          className={"header"}
          text={"Pets directory"}
          aria-label="Pets Directory Header"
        />
        <Title
          className={"description big-margin-top"}
          text={
            "See all pets available for adoption, promote them and get them a home"
          }
          aria-label="Directory Description"
        />
        <Button
          title="See all"
          className="grey-button width-lg"
          onClick={() => alert("Pet directory is under construction")}
          aria-label="See all pets button"
        />
      </div>
    </div>
  );
}

export default PetDirectory;

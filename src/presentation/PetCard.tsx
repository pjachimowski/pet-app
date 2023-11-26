import React, { useState } from "react";
import { Pet } from "../types/Pet";
import Button from "./Button";
import PetPopup from "./PetPopup";
import Title from "./Title";

interface Props {
  pet: Pet;
}

function PetCard(props: Readonly<Props>) {
  const { pet } = props;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="standard-margin-top pet-card">
      <div className="pet-image__container" aria-label="Pet Photo">
        <img className="pet-image" src={pet.photoUrl} alt="Pet" />
      </div>
      <Title className={"title standard-margin-top"} text={pet.name!} />
      <Button
        title="View"
        className="pet-button width-sm standard-margin-top"
        onClick={handleButtonClick}
      />
      {isPopupOpen && <PetPopup onClose={handleClosePopup} pet={pet} />}
    </div>
  );
}

export default PetCard;

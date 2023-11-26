import React from "react";
import { Pet } from "../types/Pet";
import Button from "./Button";
import Title from "./Title";

interface Props {
  onClose: () => void;
  pet: Pet;
}

function PetPopup(props: Readonly<Props>) {
  const { onClose, pet } = props;

  const getAge = (yearOfBirth: number) => {
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - yearOfBirth;
    return calculatedAge.toString();
  };

  return (
    <div className="popup-overlay">
      <div className="popup" aria-label="Pets popup">
        <div className="popup-left__container">
          <img
            className="image-cover"
            src={pet.photoUrl}
            alt="treats"
            aria-label="Image of treats"
          />
        </div>
        <div className="popup-right__container">
          <Title
            className={"header"}
            text={`Meet ${pet.name!}!`}
            aria-label="Pets popup Header"
          />
          <Title
            className={"subheader"}
            text={`${pet.name!} is ${getAge(pet.birthYear!)} years old`}
            aria-label="Pets popup Header"
          />
          <Title
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            aria-label="Pet Description"
          />
          <Title
            className={"subheader"}
            text={`${pet.species!} is ${
              pet.available ? "ready" : "not ready"
            } for adoption`}
            aria-label="Pets popup Header"
          />
          <section className="popup__footer">
            <Button
              className="grey-button width-sm"
              onClick={onClose}
              title="Close"
            />
             <button className="action-button width-sm" onClick={() => {
                alert("Adoption not ready");
              }}>Adopt
              </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PetPopup;

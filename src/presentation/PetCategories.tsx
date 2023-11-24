import React from "react";
import "../App.css";
import Category from "./Category";
import Title from "./Title";

function PetCategories() {
  return (
    <div>
      <Title style={"subheader bigMarginTop"} text={"Categories"} />
      <div className="cardList bigMarginTop">
        <Category title={"All pets"} icon={"/icons/heart.svg"} />
        <Category title={"Location specific"} icon={"/icons/pin.svg"} />
        <Category title={"Age specific"} icon={"/icons/clock.svg"} />
        <Category title={"Available now"} icon={"/icons/confettie.svg"} />
        <Category title={"For small or big homes"} icon={"/icons/home.svg"} />
      </div>
    </div>
  );
}

export default PetCategories;

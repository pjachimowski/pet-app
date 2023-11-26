import React from "react";
import "../App.css";
import Category from "./Category";
import Title from "./Title";

function PetCategories() {
  return (
    <div>
      <Title className={"subheader big-margin-top"} text={"Categories"} />
      <div className="card-list big-margin-top">
        <Category
          title={"All pets"}
          icon={"/icons/heart.svg"}
          aria-label="All pets category"
        />
        <Category
          title={"Location specific"}
          icon={"/icons/pin.svg"}
          aria-label="Location specific category"
        />
        <Category
          title={"Age specific"}
          icon={"/icons/clock.svg"}
          aria-label="Age specific category"
        />
        <Category
          title={"Available now"}
          icon={"/icons/confettie.svg"}
          aria-label="Available now category"
        />
        <Category
          title={"For small or big homes"}
          icon={"/icons/home.svg"}
          aria-label="For small or big homes category"
        />
      </div>
    </div>
  );
}

export default PetCategories;

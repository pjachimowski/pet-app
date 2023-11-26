import React from "react";
import { Pet } from "../types/Pet";
import Button from "./Button";
import Title from "./Title";

interface Props {
  title: string;
  icon: string;
}

function Category(props: Readonly<Props>) {
  const { title, icon } = props;

  return (
    <div className="big-margin-top">
      <div className="category__background">
        <img className="category__icon" src={icon} alt="Logo" />
      </div>
      <Title className={"title"} text={title} />
    </div>
  );
}

export default Category;

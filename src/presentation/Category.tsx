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
    <div >
      <div className="categoryBackground">
        <img className="categoryIcon" src={icon} alt="Logo" />
      </div>
      <Title style={"title"} text={title} />
    </div>
  );
}

export default Category;

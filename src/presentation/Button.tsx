import React, { MouseEventHandler } from "react";
import "../App.css";

interface Props {
  title?: string;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button(props: Props) {
  const { title, className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      <span className="button-text__mobile">{title}</span>
      <img
        className="button-icon"
        src={"/icons/arrow-right.svg"}
        alt="button"
      />
    </button>
  );
}

export default Button;

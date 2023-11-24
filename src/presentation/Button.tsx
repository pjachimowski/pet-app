import React, { MouseEventHandler } from "react";
import "../App.css";

interface Props {
  title?: string;
  className: string;
  icon?: any;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button(props: Props) {
  const { title, className = "", onClick, icon } = props;
  return (
    <button className={className} onClick={onClick}>
      {title ?? icon}
    </button>
  );
}

export default Button;

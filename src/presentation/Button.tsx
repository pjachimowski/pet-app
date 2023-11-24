import React, { MouseEventHandler } from "react";
import "../App.css";

interface Props {
  title: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>
}

function Button(props: Props) {
  const { title, className = '', onClick } = props;
  return <button className={className} onClick={onClick}>{title}</button>;
}

export default Button;

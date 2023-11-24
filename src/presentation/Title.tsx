import React from "react";
import "../App.css";

interface Props {
  text: string;
}

function Title(props: Props) {
  const { text } = props;
  return <div className="title standardMarginTop">{text}</div>;
}

export default Title;

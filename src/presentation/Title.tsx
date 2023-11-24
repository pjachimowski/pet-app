import React from "react";
import "../App.css";

interface Props {
  text: string;
  style?: string;
}

function Title(props: Props) {
  const { text, style } = props;
  return <div className={style + " standardMarginTop"}>{text}</div>;
}

export default Title;

import React from "react";
import "../App.css";

interface Props {
  text: string;
}

function Header(props: Props) {
  const { text } = props;
  return <div className="header standardMarginTop">{text}</div>;
}

export default Header;

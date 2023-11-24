import React from "react";
import "../App.css";

interface Props {
  text: string;
}

function SubHeader(props: Props) {
  const { text } = props;
  return <div className="subheader standardMarginTop">{text}</div>;
}

export default SubHeader;

import React from "react";
import "../App.css";

interface Props {
  text: string;
  className?: string;
}

function Title(props: Props) {
  const { text, className } = props;
  return (
    <p className={className} aria-label={className}>
      {text}
    </p>
  );
}

export default Title;

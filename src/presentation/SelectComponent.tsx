import React, { useState } from "react";
import "../App.css";

interface Props {
  options: string[];
}

function SelectComponent(props: Props) {
  const { options } = props;

  const [selectedPet, setSelectedPet] = useState("orange");
  // ...
  return (
    <select
      className="standardSelect"
      value={selectedPet}
      onChange={(e) => setSelectedPet(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default SelectComponent;

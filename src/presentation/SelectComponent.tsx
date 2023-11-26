import React, { useState } from "react";
import "../App.css";

interface Props {
  options: string[];
  placeholder?: string;
  handleSelect: (value: string) => void;
}

function SelectComponent(props: Props) {
  const { options, placeholder = "", handleSelect } = props;

  const [selectedPet, setSelectedPet] = useState("");

  const onChange = (value: string) => {
    handleSelect(value);
    setSelectedPet(value);
  };

  return (
    <select
      className="standard-select"
      value={selectedPet}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Select Pet"
    >
      <option value="" disabled selected hidden>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default SelectComponent;

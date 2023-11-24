import React from "react";
import { Species } from "../types/Species";
import SelectComponent from "./SelectComponent";

interface Props {
  filter: string;
  setFilter: (value: string) => void;
}

function PetFilter(props: Props) {
  const { filter, setFilter } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter(value);
  };

  return (
    <div>
      <div className="standardContainer searchInput">
        <img className="searchIcon" src={"/icons/search.svg"} alt="Logo" />
        <input
          type="text"
          id="petSearch"
          // className="searchInput"
          value={filter}
          onChange={handleInputChange}
          placeholder={"Type to search..."}
        />
      </div>
      <div className="standardContainer">
        <SelectComponent options={["cat", "dog"]} />
        <SelectComponent options={["cat", "dog"]} />
        <SelectComponent options={["cat", "dog"]} />
      </div>
    </div>
  );
}

export default PetFilter;

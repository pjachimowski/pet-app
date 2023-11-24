import React from "react";
import { Species } from "../types/Species";
import SelectComponent from "./SelectComponent";

interface Props {
  value: string;
  handleSearch: (value: string) => void;
}

function PetFilter(props: Props) {
  const { value, handleSearch } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    handleSearch(term);
  };

  return (
    <div>
      <div className="standardMarginTop searchInput">
        <img className="searchIcon" src={"/icons/search.svg"} alt="Logo" />
        <input
          type="text"
          id="petSearch"
          value={value}
          onChange={handleInputChange}
          placeholder={"Type to search..."}
        />
      </div>
      <div className="standardMarginTop">
        <SelectComponent options={["cat", "dog"]} />
        <SelectComponent options={["cat", "dog"]} />
        <SelectComponent options={["cat", "dog"]} />
      </div>
    </div>
  );
}

export default PetFilter;

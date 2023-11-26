import React from "react";
import Button from "./Button";
import SelectComponent from "./SelectComponent";

interface Props {
  value: string;
  handleSearch: (value: string) => void;
  sortByDateAdded: () => void;
}

function PetFilter(props: Props) {
  const { value, handleSearch, sortByDateAdded } = props;

  const handleInputChange = (term: string) => {
    handleSearch(term);
  };

  return (
    <div aria-label="Search and Filter Options">
      <div className="standard-margin-top search-input__container">
        <img src={"/icons/search.svg"} alt="search" aria-label="Search Icon" />
        <input
          className="search-input"
          type="text"
          id="petSearch"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={"Search for pets"}
          aria-label="Search Input"
        />
      </div>
      <div className="standard-margin-top">
        <SelectComponent
          handleSelect={handleInputChange}
          options={["cat", "dog", "rat"]}
          aria-label="Select Type "
          placeholder="Type"
        />
        <SelectComponent
          handleSelect={() => {}}
          options={["no categories yet"]}
          aria-label="Select Category"
          placeholder="Category"
        />
        <button className="latest-button" onClick={sortByDateAdded}>
          <span>Latest added</span>
        </button>
      </div>
    </div>
  );
}

export default PetFilter;

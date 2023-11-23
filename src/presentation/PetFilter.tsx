import React from "react";

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
      <label htmlFor="petSearch">Search Pets:</label>
      <input
        type="text"
        id="petSearch"
        value={filter}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
    </div>
  );
}

export default PetFilter;

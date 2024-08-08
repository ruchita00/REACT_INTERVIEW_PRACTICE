import React, { useState } from "react";
import SearchInput from "../components/SearchInput";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (value) => {
    setSearchInput(value);
  };
  return (
    <div>
      <p>searching for:{searchInput}</p>
      <SearchInput onChange={handleChange} />
    </div>
  );
};

export default Search;

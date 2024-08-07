import React, { useState } from "react";
import SearchInput from "../components/SearchInput";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (value) => {
    setSearchValue(value);
  };
  return (
    <div>
      <p>searching for:{searchValue}</p>
      <SearchInput onChange={handleChange} />
    </div>
  );
};

export default Search;

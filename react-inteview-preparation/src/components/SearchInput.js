import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const dummyData = [
  { id: "1", name: "apple" },
  { id: "2", name: "chiku" },
  { id: "3", name: "jira" },
  { id: "4", name: "pear" },
];
const SearchInput = ({ onChange }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);
  const debouncedValue = useDebounce(inputSearch, 2000);
  const handleInput = (e) => {
    setInputSearch(e.target.value);
  };

  const filteredData = dummyData?.filter((item) =>
    item.name.toLowerCase().includes(inputSearch.toLowerCase())
  );

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  useEffect(() => {
    setResult(filteredData);
  }, [debouncedValue]);

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        value={inputSearch}
        placeholder="type something here"
      />
      <div>
        {result.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </div>
    </div>
  );
};

export default SearchInput;

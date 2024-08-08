import React, { useEffect, useState, useCallback } from "react";
import useDebounce from "../hooks/useDebounce";

const DummyData = [
  { id: 1, name: "chiku" },
  { id: 2, name: "apple" },
  { id: 3, name: "kivi" },
  { id: 4, name: "pear" },
];

const SearchInput = ({ onChange }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);
  const debouncedValue = useDebounce(inputSearch, 2000);

  const handleInputChange = useCallback((e) => {
    setInputSearch(e.target.value);
  }, []);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(debouncedValue);
    }

    const filteredData = DummyData.filter((item) =>
      item.name.toLowerCase().includes(debouncedValue.toLowerCase())
    );

    setResult(filteredData);
  }, [onChange, debouncedValue]);

  return (
    <div>
      <input
        type="text"
        name="text"
        value={inputSearch}
        onChange={handleInputChange}
      />
      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;

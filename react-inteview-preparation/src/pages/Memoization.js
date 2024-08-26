import React, { useCallback, useMemo, useState } from "react";

const Memoization = () => {
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState(["Banana", "apple", "organge", "mango"]);
  //usecllback to memoize the handlfilterchange function
  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  //useMemo to memoize the filtered and sorted list
  const filteredItems = useMemo(() => {
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered.sort(); //sort alphbetically
  }, [filter, items]);
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="filter itens"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Memoization;

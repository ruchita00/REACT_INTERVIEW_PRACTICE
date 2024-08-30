import React, { useState } from "react";

const Dummy = () => {
  const [allData, setAllData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [name, setName] = useState("");

  const handleEdit = (id) => {
    const newList = allData.find((item) => item.id === id);
    setCurrentIndex(id);
    setName(newList.value);
  };
  const handleDelete = (id) => {
    const newList = allData.find((item) => item.id !== id);
    setAllData(newList);
  };
  const handleSubmit = () => {
    if (currentIndex) {
      const newList = allData.map((item) =>
        item.id === currentIndex ? { ...item, value: name } : item
      );
      setAllData(newList);
      setName("");
      setCurrentIndex(null);
    } else {
      setAllData((prev) => [...prev, { id: allData.length - 1, value: name }]);
      setName("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="user name"
      />
      <button onClick={handleSubmit}>{currentIndex ? "update" : "all"}</button>
      <div>
        {allData.map((item) => (
          <div key={item.id}>
            <h5>{item.value}</h5>
            <h5 onClick={() => handleEdit(item.id)}>edit</h5>
            <h5 onClick={() => handleDelete(item.id)}>delete</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dummy;

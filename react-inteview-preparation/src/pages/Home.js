import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h3>List of Components</h3>
      </div>
      <div>
        <li>Search with debounce</li>
        <li>Progress Bar</li>
        <li>Accordion </li>
        <li>Stop watch</li>
        <li>Form</li>
        <li>Todo</li>
      </div>
    </div>
  );
};

export default Home;

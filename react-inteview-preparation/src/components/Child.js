import React from "react";

const Child = (props) => {
  const data = { name: "ruchita sagalgile", email: "ruchi@gmail.com" };
  return (
    <div>
      {" "}
      <h2>User name: </h2>
      <button onClick={() => props.alert(data)}>Click me</button>
    </div>
  );
};

export default Child;

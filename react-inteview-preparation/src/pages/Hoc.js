import React, { useState } from "react";

/**
 *
 * @returns hoc :component pass as props into other component
 * output as component
 */
const Hoc = () => {
  return (
    <div>
      <h1>hoc</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
};
function HOCRed(props) {
  return (
    <h3 style={{ backgroundColor: "red", width: "100px" }}>
      <props.cmp />
    </h3>
  );
}
function HOCGreen(props) {
  return (
    <h3 style={{ backgroundColor: "green", width: "100px" }}>
      <props.cmp />
    </h3>
  );
}
function HOCBlue(props) {
  return (
    <h3 style={{ backgroundColor: "blue", width: "100px" }}>
      <props.cmp />
    </h3>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
export default Hoc;

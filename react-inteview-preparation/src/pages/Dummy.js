import React, { useState } from "react";

const Dummy = () => {
  return (
    <div>
      <HOCRED cmp={Counter} />
      <HOCBLUE cmp={Counter} />
    </div>
  );
};

function HOCRED(props) {
  return (
    <h3 style={{ backgroundColor: "red", width: "100px" }}>
      <props.cmp />
    </h3>
  );
}
function HOCBLUE(props) {
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
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>update</button>
    </div>
  );
}

export default Dummy;

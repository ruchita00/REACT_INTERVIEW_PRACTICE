import React from "react";
import Child from "../components/Child";

const ChildtoParent = () => {
  
    function parentAlert(data) {
    console.log(data);
    alert(data.name);
  }
  return (
    <div>
      <Child alert={parentAlert} />
    </div>
  );
};

export default ChildtoParent;

import React from "react";
import ProgressComponent from "../components/ProgressComponent";

const Progress = () => {
  return (
    <div>
      <ProgressComponent duration={9000} interval={10} />
    </div>
  );
};

export default Progress;

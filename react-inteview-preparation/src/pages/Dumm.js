import React, { useEffect, useState } from "react";

const Dumm = ({ interval, duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + (interval / duration) * 100;
        } else {
          clearInterval(handler);
        }
      });
    }, interval);
    return () => {
      clearInterval(handler);
    };
  }, [duration, interval]);
  return (
    <div
      style={{
        width: "800px",
        height: "20px",
        overflow: "hidden",
        border: "1px solid black",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
};

export default Dumm;

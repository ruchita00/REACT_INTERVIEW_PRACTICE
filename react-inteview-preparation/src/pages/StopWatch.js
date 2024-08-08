import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    } else {
      clearInterval(intervalId);
    }
  });

  const timeFormatter = (time) => {
    let sec = time % 60;
    let min = Math.floor(time / 60);
    let hours = Math.floor(time / 3600);

    return `${hours.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div>
      <p>{timeFormatter(time)}</p>
      <button onClick={handleStartStop}>{isRunning ? "stop" : "start"}</button>
      <button onClick={handleReset}>rest</button>
    </div>
  );
};

export default StopWatch;

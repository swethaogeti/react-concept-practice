import React, { useEffect, useRef, useState } from "react";
export const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);

  function handleState() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }
  return (
    <>
      <p>{secondPassed.toFixed(1)}</p>
      <button onClick={handleState}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

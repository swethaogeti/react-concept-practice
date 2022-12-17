import React, { useEffect, useState } from "react";
import { Clock } from "./Clock";
function useTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export const ClockPage = () => {
  const time = useTime();
  const [color, setColor] = useState("lightcoral");
  return (
    <>
      <p>Pick a Color</p>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="lightcoral">Lightcoral</option>
        <option value="midnightblue">midnight</option>
        <option value="rebeccapurple">rebeccapurple</option>
      </select>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </>
  );
};

import React, { useState, useMemo } from "react";

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "pink",
    color: dark ? "white" : "black",
    width: "200px",
    height: "200px"
  };
  return (
    <>
      <input value={number} onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={() => setDark((prev) => !prev)}>change theme</button>
      <div style={themeStyles}></div>
    </>
  );
};

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i < 10000; i++) {}
  return num * 2;
}

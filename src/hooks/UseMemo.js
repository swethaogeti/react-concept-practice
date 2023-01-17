import React, { memo, useState, useMemo, useEffect } from "react";

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "pink",
      color: dark ? "white" : "black",
      width: "200px",
      height: "200px"
    };
  }, [dark]);
  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles]);
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

export const MemoHook = () => {
  const [count, setoCount] = useState(0);
  const [input, setInput] = useState("");
  const calculate = useMemo(() => slowFunction(count), [count]);
  return (
    <>
      <h1>this is memo hook</h1>
      <h1>{count}</h1>
      <button onClick={() => setoCount((c) => c + 1)}>increment</button>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <p>{calculate}</p>
    </>
  );
};

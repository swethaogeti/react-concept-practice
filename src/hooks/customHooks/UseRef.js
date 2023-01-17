import React, { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [input, setInput] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <h1>Render {count.current}</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
    </>
  );
};

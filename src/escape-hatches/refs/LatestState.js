import React, { useRef } from "react";
import { useState } from "react";

export const LatestState = () => {
  const [text, setText] = useState("");
  const textRef = useRef(text);
  const handleSend = (text) => {
    setTimeout(() => {
      alert("sending" + textRef.current);
    }, 3000);
  };

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          textRef.current = e.target.value;
        }}
      ></input>
      <p>{text}</p>
      <button onClick={() => handleSend(text)}>Send</button>
    </>
  );
};

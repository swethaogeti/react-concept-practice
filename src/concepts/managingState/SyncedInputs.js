import React, { useState } from "react";

export const SyncedInputs = () => {
  const [text, setText] = useState("");
  return (
    <>
      <span>first input</span>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <br />
      <span>Second input</span>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
    </>
  );
};

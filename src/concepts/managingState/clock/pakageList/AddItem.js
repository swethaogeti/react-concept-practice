import React, { useState } from "react";

export const AddItem = () => {
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
    </>
  );
};

import React, { useState } from "react";

export const AddItem = ({ handleAddItem }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="add item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>

      <button
        onClick={() => {
          handleAddItem(text);
          setText("");
        }}
      >
        ADD
      </button>
    </>
  );
};

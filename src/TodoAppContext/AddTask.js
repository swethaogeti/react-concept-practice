import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";

export const AddTask = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTaskContext();
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: Date.now(),
            text: text
          });
        }}
      >
        Add
      </button>
    </>
  );
};

import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";

export const AddTask = () => {
  const { dispatch } = useTaskContext();
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button
        onClick={() =>
          dispatch({ type: "added", id: Math.random, text: text, done: false })
        }
      >
        Add
      </button>
    </>
  );
};

import React, { useState } from "react";

export const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
};

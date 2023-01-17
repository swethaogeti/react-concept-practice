import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";

export function TaskList() {
  const { tasks, dispatch } = useTaskContext();
  return (
    <>
      {tasks.map((todo) => {
        return <Task todo={todo} key={todo.id} />;
      })}
    </>
  );
}

export function Task({ todo }) {
  const { tasks, dispatch } = useTaskContext();
  const [edit, setEdit] = useState(false);

  let todoContent;

  if (edit) {
    todoContent = (
      <>
        <input value={todo.text}></input>
        <button onClick={() => setEdit(false)}>save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span>{todo.text}</span>
        <button onClick={() => setEdit(true)}>edit</button>
      </>
    );
  }

  return (
    <>
      <div key={todo.id}>
        <input type="checkbox" checked={todo.done}></input>
        {todoContent}
        <button onClick={() => dispatch({ type: "deleted", id: todo.id })}>
          Delete
        </button>
      </div>
    </>
  );
}

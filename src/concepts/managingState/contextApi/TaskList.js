import React, { useState } from "react";

import { useTaskContext } from "./TaskContext";

export const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <>
      {tasks.map((task) => {
        return (
          <>
            <Task key={task.id} task={task} />
            <br />
          </>
        );
      })}
    </>
  );
};

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useTaskContext();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: { ...task, text: e.target.value }
            })
          }
        ></input>
        <button onClick={() => setIsEditing((prev) => !prev)}>save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span>{task.text}</span>
        <button onClick={() => setIsEditing((prev) => !prev)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked }
          })
        }
      ></input>
      {taskContent}
      <button onClick={() => dispatch({ type: "delete", id: task.id })}>
        Delete
      </button>
    </>
  );
};

import React, { useState } from "react";

export const TaskList = ({ todos, onChangetodo, onDeleteTodo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {todos.map((todo) => {
        return (
          <Task
            todo={todo}
            key={todo.id}
            onChange={onChangetodo}
            onDelete={onDeleteTodo}
          />
        );
      })}
    </div>
  );
};
const Task = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => onChange({ ...todo, title: e.target.value })}
        ></input>
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input type="checkbox"></input>
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
};

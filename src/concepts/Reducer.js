import React, { useReducer, useState } from "react";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false }
];
export const Reducer = () => {
  const [taskState, dispatch] = useReducer(reducerFunc, initialTasks);
  const handleAddTask = (text) => {
    dispatch({ type: "added", id: Math.random(), text: text });
  };
  const handleChange = (task) => {
    dispatch({ type: "changed", task: task });
  };
  const handleDelete = (id) => {
    dispatch({ type: "delete", id: id });
  };
  return (
    <>
      <h1>Tasklist App using useReduce</h1>
      <AddTask handleAddTask={handleAddTask} />
      <br />
      <TaskList
        tasksList={taskState}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </>
  );
};

const AddTask = ({ handleAddTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          handleAddTask(text), setText("");
        }}
      >
        Add
      </button>
    </>
  );
};

const TaskList = ({ tasksList, handleChange, handleDelete }) => {
  return (
    <>
      {tasksList.map((task) => {
        return (
          <>
            <Task
              key={task.id}
              task={task}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
            <br />
          </>
        );
      })}
    </>
  );
};

const Task = ({ task, handleChange, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => handleChange({ ...task, text: e.target.value })}
        ></input>
        <button onClick={() => setIsEditing((prev) => !prev)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span>{task.text}</span>
        <button onClick={() => setIsEditing((prev) => !prev)}>Edit</button>
      </>
    );
  }

  return (
    <>
      {todoContent}
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </>
  );
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "added": {
      return [...state, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "delete": {
      return state.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("unknown action:" + action.type);
    }
  }
};

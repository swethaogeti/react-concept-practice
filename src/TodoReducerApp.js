import React, { useReducer, useState } from "react";

function reducerFunc(state, action) {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        { id: action.id, text: action.text, done: action.done }
      ];
    }
    case "delete": {
      return state.filter((t) => t.id !== action.id);
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
    default: {
      return state;
    }
  }
}

export const TodoReducerApp = () => {
  const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false }
  ];
  const [todos, dispatch] = useReducer(reducerFunc, initialTasks);
  const handleAddTodo = (text) => {
    dispatch({ type: "added", id: Date.now(), text: text });
  };

  const handleChange = (task) => {
    dispatch({ type: "changed", task: task });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", id: id });
  };
  return (
    <>
      <AddTask handleAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </>
  );
};

function AddTask({ handleAddTodo }) {
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => handleAddTodo(text)}>ADD</button>
    </>
  );
}

function TaskList({ todos, handleDelete, handleChange }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Task
            todo={todo}
            key={todo.id}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}

function Task({ todo, handleChange, handleDelete }) {
  const [edit, setEdit] = useState(false);

  let todoContent;

  if (edit) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={(e) => handleChange({ ...todo, text: e.target.value })}
        ></input>
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
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => handleChange({ ...todo, done: e.target.checked })}
        ></input>
        {todoContent}
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </>
  );
}

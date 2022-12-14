import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TaskList } from "./TaskList";

export const TodoList = () => {
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false }
  ];
  const [todos, setTodos] = useState(initialTodos);

  function hanldeAddTodo(title) {
    setTodos([...todos, { id: Math.random(), title: title, done: false }]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }
  return (
    <>
      <h1>Todo list </h1>
      <AddTodo onAddTodo={hanldeAddTodo} />
      <TaskList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onChangetodo={handleChangeTodo}
      />
    </>
  );
};

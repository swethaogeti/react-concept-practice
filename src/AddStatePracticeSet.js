import React, { useState } from "react";

export const ShoppingCart = () => {
  const initialProducts = [
    {
      id: 0,
      name: "Baklava",
      count: 1
    },
    {
      id: 1,
      name: "Cheese",
      count: 5
    },
    {
      id: 2,
      name: "Spaghetti",
      count: 2
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const handleIncrease = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1
          };
        } else {
          return product;
        }
      })
    );
  };

  const handleDecrement = (id) => {
    let nextProducts = products.map((product) => {
      if (product.id === id && product.count > 0) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((product) => product.count > 0);
    setProducts(nextProducts);
  };

  return (
    <>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <button onClick={() => handleIncrease(item.id)}>
              +{item.count}
            </button>
            <button onClick={() => handleDecrement(item.id)}>-</button>
          </div>
        );
      })}
    </>
  );
};

export const AddTodoApp = () => {
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false }
  ];
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), title: text, done: false }]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (nextTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <>
      <AddInput handleAddTodo={handleAddTodo} />
      <TaskList
        handleDelete={handleDelete}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
};

function AddInput({ handleAddTodo }) {
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button
        onClick={() => {
          handleAddTodo(text);
          setText("");
        }}
      >
        ADD
      </button>
    </>
  );
}

function TaskList({ todos, handleDelete, handleEditTodo }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Task
            todo={todo}
            key={todo.id}
            handleDelete={handleDelete}
            handleEditTodo={handleEditTodo}
          />
        );
      })}
    </>
  );
}

function Task({ todo, handleDelete, handleEditTodo }) {
  const [edit, setEdit] = useState(false);

  let todoContent;

  if (edit) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => handleEditTodo({ ...todo, title: e.target.value })}
        ></input>
        <button onClick={() => setEdit(false)}>save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span>{todo.title}</span>
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
          onChange={(e) => handleEditTodo({ ...todo, done: e.target.checked })}
        ></input>
        {todoContent}
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </>
  );
}

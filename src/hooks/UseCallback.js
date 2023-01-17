import React, { memo, useCallback, useEffect, useState } from "react";
import Todos from "./customHooks/Todo";
export const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  const theme = {
    backgroundColor: dark ? "black" : "pink",
    color: dark ? "white" : "black"
  };
  return (
    <div style={theme}>
      <input value={number} onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={() => setDark((prev) => !prev)}>toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
};

const List = ({ getItems }) => {
  const [items, setItmes] = useState([]);

  useEffect(() => {
    setItmes(getItems());
    console.log("updating itmes");
  }, [getItems]);
  return (
    <>
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </>
  );
};

export const CallbackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

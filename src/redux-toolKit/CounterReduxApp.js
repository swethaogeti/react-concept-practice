import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
export const CounterReduxApp = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Practice</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>

      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

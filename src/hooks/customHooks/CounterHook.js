import React from "react";
import { useCounter } from "./useCounter";

export const CounterHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h1>Using custom hook</h1>
      <button onClick={decrement}>Decrement</button>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

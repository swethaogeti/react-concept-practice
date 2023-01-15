import { useState } from "react";

export const useCounter = (initialalue) => {
  const [counter, setCounter] = useState(initialalue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(initialalue);

  return { increment, decrement, reset, counter };
};

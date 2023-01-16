import React from "react";
import { useEffect, useState } from "react";
const useInterval = (onTick, delay) => {
  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [onTick, delay]);
};

const useCounterWatch = (delay) => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);
  return count;
};

// const useCounterWatch = (delay) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount((c) => c + 1);
//     },delay);
// console.log('inside effect')
//     return () => clearInterval(id);
//   },[delay]);

//   return count;
// };

export const CounterHookCustom = () => {
  const [delay, setDelay] = useState(1000);
  const count = useCounterWatch(delay);

  return (
    <>
      <input
        type="range"
        value={delay}
        min="10"
        max="2000"
        onChange={(e) => setDelay(e.target.value)}
      ></input>
      <h1>Tick duration {delay}</h1>
      <h1>This counter hook {count}</h1>
    </>
  );
};

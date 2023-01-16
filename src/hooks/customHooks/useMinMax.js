import React, { useEffect, useState } from "react";
const useRandom = (min, max) => {
  const [values, setValues] = useState([min, max]);
  // console.log((Math.random(values[0], values[1])*10).toFixed(0));

  useEffect(() => {
    setValues((Math.random(values[0], values[1]) * 10).toFixed(0));
  }, [values]);

  return values;
};

export const RandomNumber = () => {
  const value = useRandom();
  return (
    <>
      <p> is random number {value}</p>
    </>
  );
};

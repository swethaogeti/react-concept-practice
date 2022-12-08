import React, { useState } from "react";
import { MyButton } from "./MyButton";

export const SharingData = () => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    return setCounter(counter + 1);
  };
  return (
    <div>
      <MyButton count={counter} handleOnClick={handleOnClick} />
      <MyButton count={counter} handleOnClick={handleOnClick} />
    </div>
  );
};

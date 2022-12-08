import React from "react";

export const MyButton = ({ count, handleOnClick }) => {
  return (
    <button className="m-1  bg-blue-400 p-2" onClick={handleOnClick}>
      Counter{count}
    </button>
  );
};

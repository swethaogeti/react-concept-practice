import React from "react";

export const Clock = ({ time, color }) => {
  return <h1 style={{ color: color }}>{time}</h1>;
};

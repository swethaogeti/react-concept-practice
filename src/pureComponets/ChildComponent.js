import React from "react";

export const ChildComponent = ({ name, city }) => {
  console.log("inside child component");
  return (
    <>
      <h1>This is ChildComponent</h1>
      <h2>
        {name}-{city}
      </h2>
    </>
  );
};

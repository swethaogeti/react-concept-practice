import React from "react";

//high order compononets are the functions are componets which takes a components and return new component

export const HighOderComponent = (Component) => {
  return () => (
    <div>
      <h1>HOC</h1>
      <Component />
    </div>
  );
};

import React from "react";
import { ChildComponent } from "./ChildComponent";

function ParentComponent({ name, city }) {
  console.log("inside the parent component");
  return (
    <>
      <h1>This is Parent Componet</h1>
      <h2>
        - {name} - {city}
      </h2>
      {/* <ChildComponent name={name} city={city} /> */}
    </>
  );
}

export default React.memo(ParentComponent);

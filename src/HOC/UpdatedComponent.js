import React, { useState } from "react";

export const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);
    return (
      <>
        <OriginalComponent
          counter={counter}
          inrementCounter={() => setCounter((counter) => counter + 1)}
        />
      </>
    );
  }
  return NewComponent;
};

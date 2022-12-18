import React, { useState } from "react";

export const PreservingState = () => {
  const [player, setPlayer] = useState(false);
  return (
    <>
      {player ? (
        <Counter name="sweety" key={1} />
      ) : (
        <Counter name="jyoo" key={2} />
      )}

      <button onClick={() => setPlayer((prev) => !prev)}>next player</button>
    </>
  );
};

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        outline: "dotted",
        border: "1px"
      }}
    >
      <h4>
        {name}'s score {count}
      </h4>
      <button onClick={() => setCount((prev) => prev + 1)}>Add one</button>
    </div>
  );
};

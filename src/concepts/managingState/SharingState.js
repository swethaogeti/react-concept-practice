import React, { useState } from "react";

export const SharingState = () => {
  const [isActive, setISActive] = useState(0);

  return (
    <>
      <h1>State Lifting to share the share the state between the componet</h1>

      <Panel
        item="about"
        isActive={isActive === 0}
        onshow={() => setISActive(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>

      <Panel
        item="Etymology"
        isActive={isActive === 1}
        onshow={() => setISActive(1)}
      >
        The name comes from алма, the Kazakh word for "apple" and is often
        translated as "full of apples". In fact, the region surrounding Almaty
        is thought to be the ancestral home of the apple, and the wild Malus
        sieversii is considered a likely candidate for the ancestor of the
        modern domestic apple.
      </Panel>
    </>
  );
};

const Panel = ({ item, children, isActive, onshow }) => {
  return (
    <div>
      <h1>{item}</h1>
      {isActive ? <p> {children}</p> : <button onClick={onshow}>add</button>}
    </div>
  );
};

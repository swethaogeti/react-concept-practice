import React, { useCallback, useEffect, useState } from "react";

export const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  const theme = {
    backgroundColor: dark ? "black" : "pink",
    color: dark ? "white" : "black"
  };
  return (
    <div style={theme}>
      <input value={number} onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={() => setDark((prev) => !prev)}>toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
};

const List = ({ getItems }) => {
  const [items, setItmes] = useState([]);

  useEffect(() => {
    setItmes(getItems());
    console.log("updating itmes");
  }, [getItems]);
  return (
    <>
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </>
  );
};

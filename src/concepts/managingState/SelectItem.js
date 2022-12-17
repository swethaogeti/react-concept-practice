import React, { useState } from "react";

export const SelectItem = () => {
  const initialItems = [
    { title: "pretzels", id: 0 },
    { title: "crispy seaweed", id: 1 },
    { title: "granola bar", id: 2 }
  ];
  const [list, setList] = useState(initialItems);
  const [select, setSelect] = useState(list[0]);

  const handleInputs = (id, e) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div>
      <h1>Select Item From the list</h1>
      {list.map((item) => {
        return (
          <>
            <input
              value={item.title}
              onChange={(e) => handleInputs(item.id, e)}
            ></input>
            <button onClick={() => setSelect(item)}>Choose</button>
          </>
        );
      })}
      <h3>You picked {select.title}</h3>
    </div>
  );
};

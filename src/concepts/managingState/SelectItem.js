import React, { useState } from "react";

export const SelectItem = () => {
  const initialItems = [
    { title: "pretzels", id: 0 },
    { title: "crispy seaweed", id: 1 },
    { title: "granola bar", id: 2 }
  ];
  const [list, setList] = useState(initialItems);
  const [select, setSelect] = useState(list[0]);
  return (
    <div>
      <h1>Select Item From the list</h1>
      {list.map((item) => {
        return (
          <li key={item.id}>
            {item.title}
            <button onClick={() => setSelect(item)}>Choose</button>
          </li>
        );
      })}
      <h3>You picked {select.title}</h3>
    </div>
  );
};

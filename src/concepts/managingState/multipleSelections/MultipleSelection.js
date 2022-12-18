import React, { useState } from "react";
import { Letter } from "./Letter";

export const MultipleSelection = () => {
  const letters = [
    {
      id: 0,
      subject: "Ready for adventure?",
      isStarred: true
    },
    {
      id: 1,
      subject: "Time to check in!",
      isStarred: false
    },
    {
      id: 2,
      subject: "Festival Begins in Just SEVEN Days!",
      isStarred: false
    }
  ];
  const [list, setList] = useState(letters);
  const selected = list.filter((item) => item.isStarred).length;
  const handleSelect = (item) => {
    setList(
      list.map((ele) => {
        if (ele.id === item.id) {
          return item;
        } else {
          return ele;
        }
      })
    );
  };
  return (
    <div>
      {list.map((item) => (
        <Letter key={item.id} item={item} handleSelect={handleSelect} />
      ))}
      <p>you selected {selected} letter</p>
    </div>
  );
};

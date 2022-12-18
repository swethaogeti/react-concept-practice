import React from "react";

export const Letter = ({ handleSelect, item }) => {
  console.log(item);
  return (
    <div>
      <input
        type="checkbox"
        checked={item.isStarred}
        onChange={(e) => handleSelect({ ...item, isStarred: e.target.checked })}
      ></input>
      <span>{item.subject}</span>
    </div>
  );
};

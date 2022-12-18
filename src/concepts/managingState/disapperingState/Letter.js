import React, { useState } from "react";
export const Letter = ({ item, isHighlighted, onHover, onToggleStar }) => {
  // const [toogle,setToggle]=useState(false)

  return (
    <p
      style={{
        backgroundColor: isHighlighted ? "#d2eaff" : ""
      }}
      onFocus={() => {
        onHover(item.id);
      }}
      onPointerMove={() => {
        onHover(item.id);
      }}
    >
      {" "}
      <button onClick={() => onToggleStar(item.id)}>
        {item.isStarred ? "unstar" : "star"}
      </button>{" "}
      {item.subject}{" "}
    </p>
  );
};

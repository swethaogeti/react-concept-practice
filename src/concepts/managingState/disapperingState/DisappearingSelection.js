import React, { useState } from "react";
import { Letter } from "./Letter";

export const DissaperingSelection = () => {
  const initialLetters = [
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

  const [list, setList] = useState(initialLetters);
  const [highlightedId, setHighlightedId] = useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  const handleStar = (starredId) => {
    setList(
      list.map((item) => {
        if (item.id === starredId) {
          return {
            ...item,
            isStarred: !item.isStarred
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      {list.map((item) => (
        <Letter
          key={item.id}
          onToggleStar={handleStar}
          onHover={handleHover}
          isHighlighted={item.id === highlightedId}
          item={item}
        />
      ))}
    </>
  );
};

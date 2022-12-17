import React, { useState } from "react";

export const BgActive = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(false)}
      style={{
        width: "700px",
        backgroundColor: isActive ? "blue" : " ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img
        onClick={(e) => {
          e.stopPropagation();
          setActive((prev) => !prev);
        }}
        style={{ width: "200px" }}
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      ></img>
    </div>
  );
};

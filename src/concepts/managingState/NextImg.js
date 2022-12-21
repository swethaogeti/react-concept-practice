import React, { useState } from "react";

export const NextImg = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  let image = images[index];
  return (
    <>
      <button onClick={() => handleNext()}>Next</button>
      <h1>
        image {index + 1} 0f {images.length}
      </h1>
      <img
        alt="pic"
        key={index}
        src={image.src}
        style={{ width: "200px" }}
      ></img>
    </>
  );
};

let images = [
  {
    place: "Penang, Malaysia",
    src: "https://i.imgur.com/FJeJR8M.jpg"
  },
  {
    place: "Lisbon, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg"
  },
  {
    place: "Bilbao, Spain",
    src: "https://i.imgur.com/z08o2TS.jpg"
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg"
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://i.imgur.com/JBbMpWY.jpg"
  },
  {
    place: "Prague, Czechia",
    src: "https://i.imgur.com/QwUKKmF.jpg"
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg"
  }
];

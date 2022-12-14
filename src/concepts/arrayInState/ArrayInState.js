import React, { useState } from "react";

//for adding use concat [...arr]
export const ArrayAdding = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (name !== "") {
      setList([...list, { name: name, id: Math.random() }]);
      setName("");
    }
  };

  return (
    <>
      <h1>Add List</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add</button>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  );
};

//removing elements
//for removing elements use filter and slice instead of pop shift splice

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" }
];

export const ArrayDelete = () => {
  const [list, setList] = useState(initialArtists);

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>Remove from array</h1>

      {list.length > 0
        ? list.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  {item.name}{" "}
                  <button onClick={() => handleDelete(item.id)}>delete</button>
                </p>
              </div>
            );
          })
        : "no items"}
    </>
  );
};

// for replace and transform use map insted of splice,arr[i]=..

export const ArrayTransform = () => {
  let initialShapes = [
    { id: 0, type: "circle", x: 50, y: 100 },
    { id: 1, type: "square", x: 150, y: 100 },
    { id: 2, type: "circle", x: 250, y: 100 }
  ];

  const [shapes, setShapes] = useState(initialShapes);

  const handleClick = () => {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50
        };
      }
    });
    setShapes(nextShapes);
  };
  return (
    <>
      {/* <h1>Array Transform</h1> */}
      <button onClick={handleClick}>Move the circles</button>
      {shapes.map((shape) => {
        return (
          <div
            key={shape.id}
            style={{
              background: "purple",
              position: "absolute",
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : "",
              width: 20,
              height: 20
            }}
          ></div>
        );
      })}
    </>
  );
};

//replace items in an array use map

export const ArrayReplace = () => {
  let initialCounters = [0, 0, 0];

  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (index) => {
    const nextCounters = counters.map((c, i) => {
      if (index === i) {
        return c + 1;
      }
      return c;
    });
    setCounters(nextCounters);
  };
  return (
    <>
      <h1>Replace the array </h1>
      {counters.map((counter, i) => (
        <div key={i}>
          <p>
            {counter} <button onClick={() => handleIncrement(i)}>+1</button>
          </p>
        </div>
      ))}
    </>
  );
};

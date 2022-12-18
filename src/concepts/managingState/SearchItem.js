import React, { useState } from "react";

export const SearchItem = () => {
  const foods = [
    {
      id: 0,
      name: "Sushi",
      description:
        "Sushi is a traditional Japanese dish of prepared vinegared rice"
    },
    {
      id: 1,
      name: "Dal",
      description:
        "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added"
    },
    {
      id: 2,
      name: "Pierogi",
      description:
        "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water"
    },
    {
      id: 3,
      name: "Shish kebab",
      description:
        "Shish kebab is a popular meal of skewered and grilled cubes of meat."
    },
    {
      id: 4,
      name: "Dim sum",
      description:
        "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch"
    }
  ];

  const [text, setText] = useState("");

  const result = (foods, text) => {
    return foods.filter((item) =>
      item.name
        .split(" ")
        .some((word) => word.toLocaleLowerCase().startsWith(text))
    );

    //return foods.filter(item=>item.name.toLocaleLowerCase().startsWith(text))
  };
  const data = result(foods, text);
  return (
    <>
      <label>
        Search:
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </label>
      {data.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

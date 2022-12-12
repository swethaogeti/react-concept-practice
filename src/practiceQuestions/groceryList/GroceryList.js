import React, { useState } from "react";

export const GroceryList = () => {
  const [grocery, setGrocery] = useState({
    item: "",
    price: 0,
    id: Date.now()
  });
  const [list, setList] = useState([]);

  const handleAddGrocery = (grocery) => {
    if (grocery.item !== "" && grocery.price !== "") {
      setList([
        ...list,
        { id: Date.now(), item: grocery.item, price: grocery.price }
      ]);
      setGrocery({ item: "", price: "" });
    } else {
      console.log("enter the data");
    }
  };

  const totalPrice = () =>
    list.reduce((acc, curr) => Number(curr.price) + acc, 0);

  return (
    <div>
      <h1>Grocery List</h1>
      <input
        type="text"
        placeholder="enter item"
        value={grocery.item}
        onChange={(e) => setGrocery({ ...grocery, item: e.target.value })}
      ></input>
      <input
        type="number"
        placeholder="enter price"
        value={grocery.price}
        onChange={(e) => setGrocery({ ...grocery, price: e.target.value })}
      ></input>
      <button onClick={() => handleAddGrocery(grocery)}>Add</button>
      {list.map((prt) => {
        return (
          <div key={prt.id}>
            <strong>{prt.item}</strong> <span>{prt.price}</span>
          </div>
        );
      })}

      <strong>Total ${totalPrice()}</strong>
    </div>
  );
};

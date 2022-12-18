import React, { useState } from "react";
import { AddItem } from "./AddItem";
import { PackageList, PackL, packL } from "./PackageList";

export const BrokenPackage = () => {
  const initialItems = [
    { id: 0, title: "Warm socks", packed: true },
    { id: 1, title: "Travel journal", packed: false },
    { id: 2, title: "Watercolors", packed: false }
  ];
  const [list, setList] = useState(initialItems);
  const total = list.length;
  const packed = list.filter((item) => item.packed).length;
  const handleAddItem = (title) => {
    setList([...list, { id: Math.random(), title: title, packed: false }]);
  };

  const handleDelete = (itemId) => {
    setList(list.filter((item) => item.id !== itemId));
  };

  const handleChange = (nexItem) => {
    setList(
      list.map((item) => {
        if (item.id === nexItem.id) {
          return nexItem;
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <AddItem handleAddItem={handleAddItem} />
      {/* <PackageList
            items={list}
            handleDelete={handleDelete}
            handleChange={handleChange}
          /> */}

      {list.map((item) => (
        <PackL
          item={item}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
      ))}
      <p>
        {packed} out of {total} packed
      </p>
    </>
  );
};

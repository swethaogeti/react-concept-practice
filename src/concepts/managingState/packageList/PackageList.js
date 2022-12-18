import React from "react";

export const PackageList = ({ items, handleDelete, handleChange }) => {
  return (
    <>
      {items.map((item) => (
        <div>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={(e) =>
              handleChange({ ...item, packed: e.target.checked })
            }
          ></input>
          {item.title}
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </div>
      ))}
    </>
  );
};
export const PackL = ({ item, handleDelete, handleChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={(e) => handleChange({ ...item, packed: e.target.checked })}
      ></input>
      {item.title}
      <button onClick={() => handleDelete(item.id)}>delete</button>
    </div>
  );
};

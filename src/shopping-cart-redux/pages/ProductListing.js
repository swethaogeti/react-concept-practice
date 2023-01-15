import React from "react";
import { useSelector } from "react-redux";

export const ProductListing = () => {
  const { data } = useSelector((state) => state.products);

  return (
    <>
      <h1>shopping cart using redux</h1>
    </>
  );
};

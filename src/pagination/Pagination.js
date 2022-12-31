import React, { useEffect, useState } from "react";
import "../pagination/pagination.css";
export const Pagination = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <>
      <h1>Pagination</h1>
      <div className="w-full   mx-auto p-4 flex flex-wrap">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div
                key={product.id}
                className="w-[200px] max-h-fit m-2 text-left cursor-pointer  p-1"
              >
                <img src={product.thumbnail} alt={product.title}></img>
                <p>{product.title}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

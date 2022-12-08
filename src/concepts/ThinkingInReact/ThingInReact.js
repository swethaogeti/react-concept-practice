import React from "react";

const FilterableTable = ({ products }) => {
  return (
    <div>
      <SearchBox />
      <ProductTable products={products} />
    </div>
  );
};

const SearchBox = () => {
  return (
    <div>
      <input placeholder="search here"></input>
      <input type="checkbox"></input>
      <span>Only show products in stock</span>
    </div>
  );
};

const ProductTable = ({ products }) => {
  let lastCategory = null;
  const rows = [];
  products.forEach((product) => {
    if (product !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const ProductCategoryRow = ({ category }) => {
  return <div>{category}</div>;
};
const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
export const ThinkingInReact = () => {
  return (
    <div className="flex-col">
      <FilterableTable products={PRODUCTS} />
    </div>
  );
};

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

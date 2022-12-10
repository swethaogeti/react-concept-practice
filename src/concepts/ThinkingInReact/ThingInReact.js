import React, { useState } from "react";

const FilterableTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBox
        filterText={filterText}
        setFilterText={setFilterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        inStockOnly={inStockOnly}
        filterText={filterText}
      />
    </div>
  );
};

const ProductTable = ({ products, filterText, inStockOnly }) => {
  let lastCategory = null;
  const rows = [];
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
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
const SearchBox = ({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly
}) => {
  return (
    <form>
      <input
        value={filterText}
        placeholder="search here"
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => setInStockOnly(e.target.checked)}
      ></input>
      <span>Only show products in stock</span>
    </form>
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

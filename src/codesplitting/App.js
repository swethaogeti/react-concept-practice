import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";

export function CodeSplitting() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Routes>
      <h1>code CodeSplitting</h1>
    </>
  );
}

function NavWrapper() {
  return (
    <>
      <nav></nav>
    </>
  );
}

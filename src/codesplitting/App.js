import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Store from "./components/Store";
export function CodeSplitting() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
      <h1>swetha</h1>
    </>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}

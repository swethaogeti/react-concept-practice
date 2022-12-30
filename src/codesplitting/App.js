import React, { lazy, Suspense } from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
// import {About} from "./components/About";
//  import Home from "./components/Home";
// import Store from "./components/Store";
// const Home=lazy(()=>import('./components/Home'))
const Home = lazy(() => wait(1000).then(() => import("./components/Home")));
const Store = lazy(() => wait(1000).then(() => import("./components/Store")));
const About = lazy(() =>
  wait(1000)
    .then(() => import("./components/About"))
    .then((module) => {
      return { default: module.About };
    })
);
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
      <Suspense fallback={<h1>loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

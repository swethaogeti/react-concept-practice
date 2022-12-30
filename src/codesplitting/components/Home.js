import React, { useState } from "react";
// import { sum } from "../sum";
import { AdminData } from "./AdminData";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home</h1>
      {/* 
      <button
        onClick={() => {
          import("../sum.js").then((module) => {
            alert(module.sum(2, 3));
          });
        }}
      >
        Add 2+2
      </button> */}
      <br />
      <br />
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
    </>
  );
}

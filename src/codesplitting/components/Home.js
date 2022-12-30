import React, { lazy, Suspense, useState, useTransition } from "react";

// import { sum } from "../sum";
import { AdminData } from "./AdminData";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  // const [isPending, startTransition] = useTransition();

  // const AdminData= lazy(() =>import("./AdminData"));
  return (
    <>
      <h1>Home</h1>

      <button
        onClick={() => {
          import("../sum.js").then((module) => {
            alert(module.sum(2, 3));
          });
        }}
      >
        Add 2+2
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          // startTransition(()=>{
          setIsAdmin((prev) => !prev);
          //   })
        }}
      >
        Toggle Admin
      </button>
      {/* <Suspense fallback={<h1>loading....</h1>}> */}
      {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      {/* </Suspense> */}
    </>
  );
}
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

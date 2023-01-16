import React, { useEffect, useState } from "react";
import ParentComponent from "./ParentComponent";

export const PureComponentEx = () => {
  const [detials, setDetails] = useState({
    id: 1,
    name: "sweety",
    city: "hyderabad"
  });
  useEffect(() => {
    console.log("inside interval");
    const timeout = setInterval(
      () => setDetails({ ...detials, id: detials.id + 1 }),
      1000
    );

    return () => clearTimeout(timeout);
  }, [detials]);
  return (
    <>
      <h1>This is Pure Component</h1>
      <h2>{detials.id}</h2>
      <ParentComponent name={detials.name} city={detials.city} />
    </>
  );
};

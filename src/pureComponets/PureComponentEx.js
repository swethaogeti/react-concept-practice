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
  });
  return (
    <>
      <h1>This is Pure Component</h1>
      <ParentComponent
        // id={detials.id}
        name={detials.name}
        city={detials.city}
      />
    </>
  );
};

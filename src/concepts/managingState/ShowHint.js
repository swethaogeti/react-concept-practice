import React, { useState } from "react";

export const ShowHint = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <p>Hint: Your favrite city?</p>}
      <textarea></textarea>
      <br />
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide hint" : "show hint"}
      </button>
    </>
  );
};

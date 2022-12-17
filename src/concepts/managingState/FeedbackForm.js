import React, { useState } from "react";

export const FeedBackForm = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  const handleForm = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await submitForm(text);
    setStatus("sent");
  };

  if (status === "sent") {
    return <h2>Thanks are the feedback</h2>;
  }
  return (
    <>
      <h1>Feedback form</h1>
      <p>How was your Stay at The Prancing Pony</p>
      <from>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <br />
        <button onClick={handleForm}>send</button>
        {status === "sending" && <p>Sending...</p>}
      </from>
    </>
  );
};

function submitForm(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

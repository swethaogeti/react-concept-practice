import React, { useState } from "react";

export const ThankyouForm = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>Thankyou!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  }
  return (
    <>
      <h1>Thank you form</h1>
      <h2>City quiz</h2>
      <p>
        in which city is there a billboard that turns air int drinkale water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          submit
        </button>
        {error !== null && <p style={{ color: "red" }}>{error.message}</p>}
      </form>
    </>
  );
};

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer!! Try again hin:lima"));
      } else {
        resolve();
      }
    }, 1000);
  });
}

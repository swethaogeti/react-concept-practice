import React, { useState } from "react";
export const Message = () => {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSumbit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`you said ${message} to ${to}`);
    }, 5000);
  }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <label>
          To:
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="bob">Bob</option>
          </select>
        </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

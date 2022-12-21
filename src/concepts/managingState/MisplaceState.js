import React, { useState } from "react";

export const MisplaceState = () => {
  const [reverse, setReverse] = useState(false);
  const displayContacts = [...data];

  if (reverse) {
    displayContacts.reverse();
  }

  return (
    <>
      <input
        type="checkbox"
        checkbox={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      ></input>
      <span>Show in reverse order</span>
      {displayContacts.map((item) => (
        <Contact contact={item} key={item.id} />
      ))}
    </>
  );
};

const Contact = ({ contact }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <h4>{contact.name}</h4>
      {active && <p>{contact.email}</p>}

      <button onClick={() => setActive((prev) => !prev)}>
        {active ? "Hide email" : "show email"}
      </button>
    </>
  );
};

const data = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" }
];

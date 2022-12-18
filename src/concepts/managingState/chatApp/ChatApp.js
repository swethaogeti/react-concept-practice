import React, { useState } from "react";
import { Chat } from "./Chat";
import { ContactList } from "./ContactList";

export const ChatApp = () => {
  const [to, setTo] = useState(contacts[0]);
  const handleSend = (item) => {
    return setTo(item);
  };

  return (
    <>
      <ContactList contacts={contacts} handleSend={handleSend} />
      <Chat contact={to} key={to.id} />
    </>
  );
};

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" }
];

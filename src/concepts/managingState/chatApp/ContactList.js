import React from "react";

export const ContactList = ({ contacts, handleSend }) => {
  return (
    <>
      {contacts.map((item) => (
        <button key={item.id} onClick={() => handleSend(item)}>
          {item.name}
        </button>
      ))}
    </>
  );
};

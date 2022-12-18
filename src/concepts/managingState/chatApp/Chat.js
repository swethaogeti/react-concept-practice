import React from "react";

export const Chat = ({ contact }) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea placeholder={contact.name}></textarea>
        <br />
        <button>send to {contact.email}</button>
      </form>
    </>
  );
};

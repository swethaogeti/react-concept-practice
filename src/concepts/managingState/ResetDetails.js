import React, { useState } from "react";

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" }
];
export const ResetDetails = () => {
  const [details, setDetails] = useState(initialContacts[0]);

  const handleChangeContact = (item) => {
    setDetails(item);
  };
  return (
    <>
      <ContactList
        contacts={initialContacts}
        handleChangeContact={handleChangeContact}
      />
      <br />
      <EditContact contact={details} />
    </>
  );
};

const ContactList = ({ contacts, handleChangeContact }) => {
  return (
    <>
      {contacts.map((item) => (
        <button onClick={() => handleChangeContact(item)}>{item.name}</button>
      ))}
    </>
  );
};

const EditContact = ({ contact }) => {
  return (
    <>
      <label>
        Name:
        <input value={contact.name}></input>
      </label>

      <label>
        Email:
        <input value={contact.email}></input>
      </label>
    </>
  );
};

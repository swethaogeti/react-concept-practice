import React, { useEffect, useState } from "react";

export const Person = () => {
  const URL = "https://jsonplaceholder.typicode.com/users/1";
  const [person, setPerson] = useState([]);

  const fetchData = async () => {
    const person = await fetch(URL);
    const personResponse = await person.json();
    setPerson(personResponse);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(person);
  return (
    <>
      <p>
        <strong>name:</strong>
        {person.name}
      </p>
      <p>
        {" "}
        <strong>website :</strong>
        {person.website}
      </p>
      <p>
        {" "}
        <strong>email:</strong> {person.email}
      </p>
      <p>
        {" "}
        <strong>phone:</strong> {person.phone}
      </p>
    </>
  );
};

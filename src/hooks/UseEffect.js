import React, { useEffect } from "react";
import { useState } from "react";

export const UseEffectHook = () => {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);
  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetch(person).then((result) => {
      if (!ignore) {
        setBio(result);
      }
    });

    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>

      <p>{bio ?? "loading"}</p>
    </>
  );
};

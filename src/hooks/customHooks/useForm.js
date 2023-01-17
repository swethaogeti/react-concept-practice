import React from "react";
import { useState } from "react";
const useForm = (initialValue) => {
  const [value, setValue] = useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  return { value, handleChange };
};

export const FormHook = () => {
  const firstNameProp = useForm("sweety");
  return (
    <>
      <input
        value={firstNameProp.value}
        onChange={firstNameProp.handleChange}
      ></input>
      <input></input>
    </>
  );
};

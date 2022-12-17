import React, { useState } from "react";

export const ProfileEditor = () => {
  const [profile, setProfile] = useState({
    firstName: "swetha",
    lastName: "ogeti"
  });
  const [isActive, setIsActive] = useState(true);
  const handleProfile = () => {
    return setIsActive((prev) => !prev);
  };

  return (
    <>
      <h1>Profile Editor</h1>

      <label>
        Firstname
        {isActive ? (
          <strong>:{profile.firstName}</strong>
        ) : (
          <input
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          ></input>
        )}
      </label>
      <br />
      <label>
        lastname
        {isActive ? (
          <strong>:{profile.lastName}</strong>
        ) : (
          <input
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          ></input>
        )}
      </label>

      <br />
      <button onClick={() => handleProfile()}>
        {isActive ? "Edit Profile" : "save Profile"}
      </button>
      <p>
        Hello , {profile.firstName} {profile.lastName}
      </p>
    </>
  );
};

import React, { useContext, createContext, useState } from "react";
const ThemeContext = createContext("light");
export const MyContextApp = () => {
  const [theme, setTheme] = useState("red");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button
        onClick={() => {
          setTheme(theme === "red" ? "blue" : "red");
        }}
      >
        Toggle theme
      </Button>
    </>
  );
};

export function Form({ children }) {
  return (
    <Panel title="welcome">
      <Button>SignUp</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <section style={{ color: theme }}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}

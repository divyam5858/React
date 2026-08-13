import React, { useState, createContext } from "react";
import UseContextB from "./UseContextB.jsx";

export const UserContext = createContext();

const UseContextA = () => {
  const [user, setUser] = useState("dii");

  return (
    <div>
      <h1>Component A</h1>

      <h2>{`Hello ${user}`}</h2>

      <UserContext.Provider value={user}>
        <UseContextB />
      </UserContext.Provider>
    </div>
  );
};

export default UseContextA;
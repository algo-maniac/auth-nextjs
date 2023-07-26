"use client";

import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [globalUser, setGlobalUser] = useState({ email: "", password: "" });
  return (
    <MyContext.Provider value={{ globalUser, setGlobalUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };

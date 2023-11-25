"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import { set } from "mongoose";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const initialState = {
  isLogged: false,
  myToken: "",
};
export function UserWrapper({ children }) {
  const [state, myState] = useState(initialState);
  const [clothes, setClothes] = useState("asdasd");
  const login = async (password, email) => {
    try {
      const auth = await axios.post("http://localhost:3001/api/user/login", {
        email: email,
        password: password,
      });

      setCookie("token", auth.data.token);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider value={{ login, state }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;

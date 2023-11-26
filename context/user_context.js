"use client";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { set } from "mongoose";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
const UserContext = createContext();
const initialState = {
  isLogged: false,
  myToken: "",
};
export function UserWrapper({ children }) {
  const [state, setState] = useState(initialState);
  const [clothes, setClothes] = useState("asdasd");
  const router = useRouter();
  const authorization = async () => {
    const token = getCookie("token");
    try {
      const data = await axios.get("http://localhost:3001/check", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setState({ ...state, isLogged: true });
      console.log(data);
      return true;
    } catch (err) {
      console.log(err);

      return false;
    }
  };
  const login = async (password, email) => {
    try {
      const auth = await axios.post("http://localhost:3001/api/user/login", {
        email: email,
        password: password,
      });

      setState({ ...state, myToken: auth.data.token, isLogged: true });
      setState({ ...state, myToken: "", isLogged: false });

      setCookie("token", auth.data.token);
      setCookie("userid", auth.data.user._id);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider value={{ login, state, authorization }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;

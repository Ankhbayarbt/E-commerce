"use client";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
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
  const [appBar, setAppBar] = useState(false);
  const router = useRouter();
  const authorization = async () => {
    const token = getCookie("token");
    if (!token) return false;
    try {
      const data = await axios.get("http://localhost:3001/check", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setState({ ...state, isLogged: true });
      console.log(data);
      setAppBar(true);
      return true;
    } catch (err) {
      console.log(err);
      setAppBar(false);

      return false;
    }
  };
  const logOut = () => {
    console.log("object");
    setState({ ...state, myToken: "", isLogged: false });
    setAppBar(false);
    deleteCookie("token");
    deleteCookie("user_id");

    router.push("/login");
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
    <UserContext.Provider
      value={{ login, logOut, state, authorization, appBar }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;

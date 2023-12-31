"use client";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { set } from "mongoose";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const UserContext = createContext();
const initialState = {
  isLogged: false,
  myToken: "",
};
export function UserWrapper({ children }) {
  const [state, setState] = useState(initialState);
  const [appBar, setAppBar] = useState(false);
  const [role, setRole] = useState("user");
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState({});
  const router = useRouter();

  // Хэрэглэгч яг тухайн мөчид системийн feature-уудийг үзэх эрхтэй эсэхийг шалгах. нэг ёсондоо login хийсэн эсэхийг шалгах function
  const authorization = async () => {
    const token = getCookie("token");
    if (!token) return false;
    try {
      const data = await axios.get("http://localhost:3001/check", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserDetail(data.data.user);
      console.log(data);
      setAppBar(true);
      return { logged: true, user: data.data.user };
    } catch (err) {
      console.log(err);
      setAppBar(false);

      return false;
    }
  };

  // Хэрэглэгчдийг db-ээс авах function
  const loadUsers = async () => {
    const token = getCookie("token");
    try {
      const users = await axios.get("http://localhost:3001/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers(users.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Logout хийх function
  const logOut = () => {
    console.log("object");
    setState({ ...state, myToken: "", isLogged: false });
    setAppBar(false);
    deleteCookie("token");
    deleteCookie("userid");

    router.push("/login");
  };

  // Хэрэглэгчийн бүртгэл үүсгэх function
  const signUp = async (fname, lname, email, password) => {
    console.log("object");
    try {
      const data = await axios.post("http://localhost:3001/api/user/", {
        fname,
        lname,
        email,
        password,
      });

      setCookie("token", data.data.token);
      setCookie("userid", data.data.user._id);
    } catch (err) {
      console.log(err);
    }
  };

  // Хэрэглэгчийн бүртгэлээр нэвтрэх function
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
      toast.success("Амжилттай нэвтэрлээ.");
      router.push("/");
    } catch (err) {
      console.log(err);
      toast.error("Username эсвэл Password буруу байна. Дахин оролдоно уу.");
    }
  };
  return (
    <UserContext.Provider
      value={{
        login,
        logOut,
        state,
        authorization,
        appBar,
        setRole,
        role,
        loadUsers,
        users,
        signUp,
        userDetail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;

"use client";
import UserContext from "@/context/user_context";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const ctx = useContext(UserContext);
  const loginButtonClick = async (e) => {
    e.preventDefault();
    if (username === dummyUsername && password === dummyPassword) {
      router.push("/");
      toast.success("Login successful");
    } else {
      setUsername("");
      setPassword("");
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        style={{ width: "480px", maxWidth: "480px", minWidth: "360px" }}
        className="mt-20 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
      >
        <form className="flex flex-col items-center ">
          <h2 className="mb-5 text-4xl font-semibold">Login</h2>

          <div className="mb-4 mt-12 w-full">
            <input
              id="username"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-8 w-full">
            <input
              id="password"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            onClick={() => {
              ctx.login(password, username);
            }}
          >
            Login
          </button>

          <hr className="mt-4" />

          <p className="text-center mt-5">
            Бүртгүүлэх бол{" "}
            <Link href="/register" className="text-blue-500">
              энд
            </Link>{" "}
            дарна уу.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

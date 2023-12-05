"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import UserContext from "@/context/user_context";
//Sign up хуудас.
const RegisterPage = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const usCtx = useContext(UserContext);
  const signUpButtonClick = async (e) => {
    if (fName != "" && lName != "" && email != "" && password != "") {
      try {
        await usCtx.signUp(fName, lName, email, password);
        toast.success("Sign Up successful");
        router.push("/");
      } catch (err) {
        toast.error("Invalid username or phone number or address or password");
      }
      toast.success("Sign Up successful");
    } else {
      toast.error("Invalid username or phone number or address or password");
    }
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center">
      <div
        style={{ width: "480px", maxWidth: "480px", minWidth: "360px" }}
        className="mt-20 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
      >
        <form className="flex flex-col items-center ">
          <h2 className="mb-5 text-4xl font-semibold">Sign up</h2>
          <div className="mb-4 mt-4 w-full">
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="first name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 mt-4 w-full">
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="last name"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 mt-4 w-full">
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-8 w-full">
            <input
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
            onClick={(e) => {
              signUpButtonClick(e);
            }}
          >
            Sign Up
          </button>

          <hr className="mt-4" />

          <p className="text-center mt-5">
            Бүртгэлтэй хэрэглэгч байгаа бол{" "}
            <Link href="/login" className="text-blue-500">
              энд
            </Link>{" "}
            дарна уу.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signUpButtonClick = async (e) => {
    e.preventDefault();
    if (
      username != "" &&
      phoneNumber != "" &&
      address != "" &&
      password != ""
    ) {
      router.push("/");
      toast.success("Sign Up successful");
    } else {
      toast.error("Invalid username or phone number or address or password");
    }
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
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 w-full">
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="password"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 w-full">
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="password"
              placeholder="Home Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
            type="submit"
            className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            onClick={signUpButtonClick}
          >
            Sign Up
          </button>

          <hr className="mt-4" />

          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

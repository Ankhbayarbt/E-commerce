"use client";
import Link from "next/link";

const LoginPage = () => {
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
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Username"
              required
            />
          </div>

          <div className="mb-8 w-full">
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          >
            Login
          </button>

          <hr className="mt-4" />

          <p className="text-center mt-5">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

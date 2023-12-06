"use client";

import UserContext from "@/context/user_context";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

// Contact хуудас.
const ContactUsPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const usCtx = useContext(UserContext);

  const router = useRouter();
  useEffect(() => {
    console.log(usCtx.role);
    usCtx
      .authorization()
      .then((res) => {
        console.log(res);
        if (res) setLoggedIn(true);
        else {
          setLoggedIn(false);
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <div className=" mx-auto w-full my-6 mb-28">
          <div className="flex flex-col md:flex-row md:items-center   p-6">
            <div className="md:w-1/2 lg:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Office"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 lg:w-3/5 mt-4 md:mt-0 md:pl-4">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Нэрээ оруулна уу.."
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email хаягаа оруулна уу.."
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Ямар шалтгаанаар бидэнтэй хандаж байгаа вэ?"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <textarea
                  placeholder="Мэдээллээ оруулна уу?"
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Илгээх
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ContactUsPage;

"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import MyAppBar from "../general/app_bar";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import UserContext from "@/context/user_context";

const Header = () => {
  const [isLooggedIn, setLoggedIn] = useState(false);
  const usCtx = useContext(UserContext);
  // useEffect(() => {

  //   usCtx
  //     .authorization()
  //     .then((res) => {
  //       if (res) setLoggedIn(true);
  //       else {
  //         setLoggedIn(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(usCtx.state);
  // }, []);
  return (
    <>
      {usCtx.appBar ? (
        <header className="bg-[#D9D9D9] py-2 border-b">
          <Navbar className="bg-[#D9D9D9]" fluid rounded>
            <Navbar.Brand href="/">
              <img
                src="https://play-lh.googleusercontent.com/A22g2UL_Qfsc7Y_wCEB5dsC2ZMy6CahngFySoE36SWYDyMhUqfzOjX2iZ9u8JvzR4THu=w240-h480-rw"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                EThrift
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Link href="/cart">
                <div className="flex justify-center items-center mr-4">
                  <div
                    className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    id="dropdownMenuButton1"
                    role="button"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    {/* Dropdown trigger icon */}
                    <span className="[&>svg]:w-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-10 w-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <span className="absolute -mt-4 ml-5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.9rem] font-bold leading-none text-red-600">
                      1
                    </span>
                  </div>
                </div>
              </Link>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    usCtx.logOut();
                  }}
                >
                  Sign out
                </Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              <Link href="/">Нүүр</Link>
              <Link href="/shop">Дэлгүүр</Link>
              {/* <Navbar.Link>Дэлгүүр</Navbar.Link> */}
              <Link href="/contact">Холбоо барих</Link>
              <Link href="/about_us">Бидний тухай</Link>
            </Navbar.Collapse>
          </Navbar>
        </header>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;

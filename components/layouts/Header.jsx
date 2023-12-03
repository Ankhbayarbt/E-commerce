"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import MyAppBar from "../general/app_bar";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import UserContext from "@/context/user_context";
import ClothesContext from "@/context/clothes_context";

const Header = () => {
  const usCtx = useContext(UserContext);
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
            <div className="flex md:order-2 items-center">
              <Link href="/cart">
                <div className="flex justify-center items-center mr-4">
                  <div
                    className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    id="dropdownMenuButton1"
                    role="button"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    <span className="[&>svg]:w-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
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
                    img="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">
                    {usCtx.userDetail.fname}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {usCtx.userDetail.email}
                  </span>
                </Dropdown.Header>

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
              <Link href="/contact">Холбоо барих</Link>
              <Link href="/about_us">Бидний тухай</Link>
              {usCtx.role === "admin" && <Link href="/admin">Админ</Link>}
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

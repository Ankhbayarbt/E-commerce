import React from "react";
import Link from "next/link";
import Search from "./Search";
import MyAppBar from "../general/app_bar";

const Header = () => {
  return (
    <header className="bg-white py-2 border-b">
      <MyAppBar />
    </header>
  );
};

export default Header;

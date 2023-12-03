"use client";
import UserContext from "@/context/user_context";
import { Footer } from "flowbite-react";
import Link from "next/link";
import { useContext } from "react";
const CustomFooter = () => {
  const usCtx = useContext(UserContext);
  return (
    <Footer container className="bg-[#D9D9D9] border-t-2">
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="https://play-lh.googleusercontent.com/A22g2UL_Qfsc7Y_wCEB5dsC2ZMy6CahngFySoE36SWYDyMhUqfzOjX2iZ9u8JvzR4THu=w240-h480-rw"
            alt="EThrift Logo"
            name="EThrift"
          />
          <Footer.LinkGroup>
            <Link href="/" className="mx-2">
              Нүүр
            </Link>
            <Link href="/shop" className="mx-2">
              Дэлгүүр
            </Link>
            <Link href="/contact" className="mx-2">
              Холбоо барих
            </Link>
            <Link href="/about_us" className="mx-2">
              Бидний тухай
            </Link>
            {usCtx.role === "admin" && (
              <Link href="/admin" className="mx-2">
                Админ
              </Link>
            )}
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="EThrift™" year={2023} />
      </div>
    </Footer>
  );
};

export default CustomFooter;

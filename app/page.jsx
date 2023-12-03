"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ListProducts from "@/components/clothes/list_clothes";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import CustomCarousel from "@/components/carousel";
import ActiveSlider from "@/components/new_clothes_slider";

import ClothesContext from "@/context/clothes_context";
import UserContext from "@/context/user_context";
import { useRouter } from "next/navigation";
const HomePage = () => {
  const clCtx = useContext(ClothesContext);
  const usCtx = useContext(UserContext);
  const [isLooggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // clCtx.loadUser();
    usCtx.loadUsers();
    clCtx.loadNewItems();
    clCtx.loadClothes();
    usCtx
      .authorization()
      .then((res) => {
        if (res) {
          setLoggedIn(true);

          if (res.user.role === "user") {
            usCtx.setRole("user");
            router.push("/");
          } else {
            usCtx.setRole("admin");
          }
        } else {
          setLoggedIn(false);
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col items-center w-full">
      {isLooggedIn ? (
        <>
          <div className="w-full my-6">
            <CustomCarousel />
          </div>
          <div className="mb-6 text-5xl font-bold">
            Шинээр нэмэгдсэн хувцаснууд
          </div>
          <div className="w-full">
            <ActiveSlider />
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default HomePage;

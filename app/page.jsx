"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProducts from "@/components/products/list_clothes";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import CustomCarousel from "@/components/carousel";
import ActiveSlider from "@/components/new_clothes_slider";

const HomePage = async () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full my-6">
        <CustomCarousel />
      </div>
      <div className="mb-6 text-5xl font-bold">Шинээр нэмэгдсэн хувцаснууд</div>
      <div className="w-full">
        <ActiveSlider />
      </div>
    </div>
  );
};

export default HomePage;

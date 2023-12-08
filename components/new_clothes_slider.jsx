"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constants";
import { useContext } from "react";
import ClothesContext from "@/context/clothes_context";
import Link from "next/link";

// Home page-ийн шинээр нэмэгдсэн хувцсыг харуулдаг slider-ийн component.
const ActiveSlider = () => {
  const clCtx = useContext(ClothesContext);
  return (
    <div className="flex items-center justify-center flex-col h-auto w-full ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {clCtx.newClothes?.map?.((item, i) => (
          <SwiperSlide key={i}>
            <Link href={`http://localhost:3000/clothes/${item._id}`}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-auto overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                  <h1 className="text-xl lg:text-3xl">{item.name} </h1>
                  <p className="text-base ">{item.description} </p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;

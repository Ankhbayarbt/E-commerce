"use client";
import React from "react";
import Filters from "../layouts/Filters";
import ClothesItem from "./clothes_item";
import Link from "next/link";
//хувцасны мэдээллийг харуулах жагсаалтын component.

const ListClothes = ({ data }) => {
  return (
    <section className="py-12">
      <div className=" w-full px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* filter хийх хэсгийн Component. */}
          <Filters />

          <main className="w-2/3 px-3">
            <div className="bg-[#D9D9D9]">
              <div className="mx-auto w-full   ">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Хувцасны жагсаалт
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {data?.map?.((clothes, i) => (
                    <div key={i} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={clothes.image}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            {/* нэг хувцасны detail хэсэгрүү URL-ээр id-Г нь дамжуулан шилжинэ. */}
                            <Link href={`/clothes/${clothes._id}`}>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {clothes.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {clothes.color}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {clothes.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ListClothes;

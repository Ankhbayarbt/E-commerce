"use client ";

import ClothesContext from "@/context/clothes_context";
import { Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import StarRatings from "react-star-ratings";
//дэлгүүр хуудасны хувцсыг шүүн харуулах үйлдлийг хийх component.
const Filters = () => {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [filterText, setFilterText] = useState("");
  const clCtx = useContext(ClothesContext);

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4 bg-[#D9D9D9]">
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-[#D9D9D9] shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
        href="#"
      >
        Filter by
      </a>
      <div className="hidden md:block px-6 py-4 border border-gray-200  rounded shadow-sm">
        <h3 className="font-semibold mb-2">Үнэ</h3>
        <div className="grid md:grid-cols-3 gap-x-2">
          <div className="mb-4">
            <input
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
              id="minPrice"
              value={minPrice}
              name="min"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Доод"
            />
          </div>

          <div className="mb-4">
            <input
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
              id="maxPrice"
              value={maxPrice}
              name="max"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Дээд"
            />
          </div>
        </div>
        <div className="mb-6">
          <TextInput
            placeholder="filter..."
            value={filterText}
            id="filtertext"
            type="text"
            onChange={(e) => {
              setFilterText(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <button
            onClick={() => {
              clCtx.filterClothes(minPrice, maxPrice, filterText);

              document.getElementById("minPrice").value = null;
              document.getElementById("maxPrice").value = null;
              document.getElementById("filtertext").value = "";
              setMaxPrice(null);
              setMinPrice(null);
              setFilterText("");
            }}
            className="px-1 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          >
            Go
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Filters;

"use client";

import React, { useContext, useEffect, useState } from "react";
import AddProductPage from "../../components/insert_clothes";
import ProductListTable from "@/components/clothes_list_table";
import UserListTable from "@/components/user_list_table";
import UserContext from "@/context/user_context";
import { useRouter } from "next/navigation";
import ClothesContext from "@/context/clothes_context";

// Admin хуудсанд хувцас болон user-үүдийн бүх мэдээллийг хянана мөн шинээр хувцас бүртгэх боломжтой.
const AdminClothesPage = () => {
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [products, setProducts] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const clCtx = useContext(ClothesContext);
  const usCtx = useContext(UserContext);
  const router = useRouter();

  // Хэрвээ хэрэглэгч админ биш энгийн хэрэглэгч байвал админ хуудас руу хандаж чадахгүй.
  useEffect(() => {
    if (usCtx.role === "user") {
      router.push("/");
    }

    usCtx
      .authorization()
      .then((res) => {
        console.log(res);
        if (res) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
          console.log("false");
          router.push("/login");
        }
      })
      .catch((err) => {});
    console.log(clCtx.clothes);
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-row my-8 justify-around">
          <div className="w-1/3">
            <AddProductPage onAddProduct={handleAddProduct} />
          </div>
          <div className="w-1/2 flex flex-col ">
            <div className="mt-12 h-80 overflow-y-scroll overflow-x-scroll flex">
              <ProductListTable />
            </div>
            <div className="mt-12 h-80 overflow-y-scroll  flex">
              <UserListTable />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminClothesPage;

"use client";

import React, { useContext, useEffect, useState } from "react";
import AddProductPage from "../../components/addClothes";
import ProductListTable from "@/components/productListTable";
import UserListTable from "@/components/UserListTable";
import UserContext from "@/context/user_context";
import { useRouter } from "next/navigation";
import ClothesContext from "@/context/clothes_context";

const AdminClothesPage = () => {
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [products, setProducts] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const ctx = useContext(ClothesContext);
  const usCtx = useContext(UserContext);
  const router = useRouter();
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
    console.log(ctx.state.clothes);
  }, []);
  // const getProducts = async () => {
  //   const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  //   console.log(data);
  //   setProducts(data);
  // };

  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-row my-8 justify-around">
          <div className="w-1/3">
            <AddProductPage onAddProduct={handleAddProduct} />
          </div>
          <div className="w-1/2 flex flex-col ">
            <div className="mt-12 h-80 overflow-y-scroll overflow-x-scroll flex">
              <ProductListTable products={ctx.clothes} />
            </div>
            <div className="mt-12 h-80 overflow-y-scroll overflow-x-scroll flex">
              <UserListTable users={ctx.users} />
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

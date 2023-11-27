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
    console.log("object");
    ctx.loadClothes();
    usCtx
      .authorization()
      .then((res) => {
        console.log(res);
        if (res) setLoggedIn(true);
        else {
          setLoggedIn(false);
          console.log("false");
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

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
          <div className="w-1/2 flex flex-col">
            <div>
              <ProductListTable products={ctx.state.clothes} />
            </div>
            <div className="mt-12">{/* <UserListTable users={users} /> */}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminClothesPage;

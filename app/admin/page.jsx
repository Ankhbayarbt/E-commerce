"use client";

import React, { useContext, useEffect, useState } from "react";
import AddProductPage from "../../components/addClothes";
import ProductListTable from "@/components/productListTable";
import UserListTable from "@/components/UserListTable";
import UserContext from "@/context/user_context";
import { useRouter } from "next/navigation";

const AdminClothesPage = () => {
  const [isLooggedIn, setLoggedIn] = useState(false);
  const usCtx = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    usCtx
      .authorization()
      .then((res) => {
        console.log(res);
        if (res) setLoggedIn(true);
        else {
          setLoggedIn(false);
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  const products = [
    {
      name: "Product 1",
      category: "Category 1",
      price: "Price 1",
      description: "Description 1",
      created_date: "Date 1",
    },
    {
      name: "Product 2",
      category: "Category 2",
      price: "Price 2",
      description: "Description 2",
      created_date: "Date 2",
    },
  ];
  const users = [
    {
      name: "User 1",
      email: "Email 1",
      password: "password 1",
    },
    {
      name: "User 2",
      email: "Email 2",
      password: "password 2",
    },
  ];

  return (
    <div className="flex flex-row my-8 justify-around">
      <div className="w-1/3">
        <AddProductPage onAddProduct={handleAddProduct} />
      </div>
      <div className="w-1/2 flex flex-col">
        <div>
          <ProductListTable products={products} />
        </div>
        <div className="mt-12">
          <UserListTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default AdminClothesPage;

"use client";
import ListProducts from "@/components/clothes/list_clothes";
import ClothesContext from "@/context/clothes_context";
import AppContext from "@/context/clothes_context";
import UserContext from "@/context/user_context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLooggedIn, setLoggedIn] = useState(false);
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
  const getProducts = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/api/products`);
    console.log(data);
    setProducts(data);
  };
  // useEffect(() => {
  //   getProducts();
  // }, []);
  return <>{isLooggedIn ? <ListProducts data={ctx.state.clothes} /> : <></>}</>;
};

export default ShopPage;

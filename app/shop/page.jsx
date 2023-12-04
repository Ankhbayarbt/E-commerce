"use client";
import ListProducts from "@/components/clothes/list_clothes";
import ClothesContext from "@/context/clothes_context";
import AppContext from "@/context/clothes_context";
import UserContext from "@/context/user_context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
//дэлгүүр page
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLooggedIn, setLoggedIn] = useState(false);
  const clCtx = useContext(ClothesContext);
  const usCtx = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    clCtx.loadNewItems();
    clCtx.loadClothes();
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
  }, []);

  return <>{isLooggedIn ? <ListProducts data={clCtx.clothes} /> : <></>}</>;
};

export default ShopPage;

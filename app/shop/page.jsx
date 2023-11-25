"use client";
import ListProducts from "@/components/clothes/list_clothes";
import ClothesContext from "@/context/clothes_context";
import AppContext from "@/context/clothes_context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const ctx = useContext(ClothesContext);
  useEffect(() => {
    ctx.loadClothes();
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
  return <ListProducts data={ctx.state.clothes} />;
};

export default ShopPage;

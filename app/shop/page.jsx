"use client";
import ListProducts from "@/components/clothes/list_clothes";
import axios from "axios";
import { useEffect, useState } from "react";
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/api/products`);
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <ListProducts data={products} />;
};

export default ShopPage;

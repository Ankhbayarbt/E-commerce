"use client";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { getCookie } from "cookies-next";
const ClothesContext = createContext();

export function ClothesWrapper({ children }) {
  const [clothes, setClothes] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [newClothes, setNewClothes] = useState([]);
  const loadCartItems = async () => {
    const token = getCookie("token");
    axios
      .get(`http://localhost:3001/api/cart/owner`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCartItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeAllFromCart = async () => {
    const token = getCookie("token");

    axios
      .post(
        "http://localhost:3001/api/cart/remove_all",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeFromCart = async (id) => {
    const token = getCookie("token");
    console.log(id);
    axios
      .post(
        "http://localhost:3001/api/cart/remove",
        {
          id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addToCart = async (clothes_id, setInCart) => {
    const token = getCookie("token");
    axios
      .post(
        "http://localhost:3001/api/cart",
        {
          clothes_id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setInCart(true);
        console.log(res);
      })
      .catch((err) => {
        setInCart(false);
        console.log(err);
      });
  };
  const loadClothes = async () => {
    const token = getCookie("token");
    try {
      const clothes = await axios.get("http://localhost:3001/api/clothes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClothes(clothes.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const loadNewItems = async () => {
    const token = getCookie("token");
    try {
      const clothes = await axios.get(
        "http://localhost:3001/api/clothes/new_clothes",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(clothes.data.data);
      setNewClothes(clothes.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ClothesContext.Provider
      value={{
        clothes,
        loadClothes,

        loadCartItems,
        cartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        newClothes,
        loadNewItems,
      }}
    >
      {children}
    </ClothesContext.Provider>
  );
}
export default ClothesContext;

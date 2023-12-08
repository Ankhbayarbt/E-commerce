"use client";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { getCookie } from "cookies-next";
const ClothesContext = createContext();

export function ClothesWrapper({ children }) {
  const [clothes, setClothes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [newClothes, setNewClothes] = useState([]);
  // Сагсанд байгаа хувцаснуудын data-г db-ээс татан авчрах function.
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

  // Сагсанд байгаа хувцаснуудыг бүгдийг нь db-ээс устгах function.
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

        let array = [];
        setCartItems([...array]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Нэг барааг сагснаас хасах function.
  const removeFromCart = async (id) => {
    let array = cartItems;
    let index = array.findIndex((el) => el._id === id);
    if (index !== -1) {
      array.splice(index, 1);
    }
    setCartItems([...array]);
    const token = getCookie("token");

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

  // Сагсанд хувцас нэмэх function.
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
  const filterClothes = async (price_from, price_to, by_string) => {
    const token = getCookie("token");
    try {
      const clothes = await axios.get(
        `http://localhost:3001/api/clothes/filter?by_string=${by_string}&price_from=${price_from}&price_to=${price_to}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setClothes(clothes.data.data);
      console.log(clothes);
    } catch (err) {
      console.log(err);
    }
  };
  // Бүх хувцасны data-г db-ээс татан авчрах function.
  const loadClothes = async () => {
    const token = getCookie("token");
    try {
      const clothes = await axios.get("http://localhost:3001/api/clothes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClothes(clothes.data.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  // Шинээр нэмэгдсэн хувцасны data-г db-ээс татан авчрах function.
  const loadNewItems = async () => {
    const token = getCookie("token");
    try {
      const clothes = await axios.get(
        "http://localhost:3001/api/clothes/new_clothes",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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
        filterClothes,
      }}
    >
      {children}
    </ClothesContext.Provider>
  );
}
export default ClothesContext;

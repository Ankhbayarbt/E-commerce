"use client";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { getCookie } from "cookies-next";
const ClothesContext = createContext();
const initialState = {
  clothes: [],
  basketItems: [],
  loading: false,
  error: null,
};
export function ClothesWrapper({ children }) {
  const [state, setState] = useState(initialState);
  const [clothes, setClothes] = useState("asdasd");
  const loadBasketItems = async () => {
    const token = getCookie("token");
    axios
      .get(`http://localhost:3001/api/basket/owner`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setState({ ...state, basketItems: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadClothes = async () => {
    const token = getCookie("token");
    try {
      const clothes = await axios.get("http://localhost:3001/api/clothes", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setState({ ...state, clothes: clothes.data.data });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ClothesContext.Provider value={{ state, loadClothes, loadBasketItems }}>
      {children}
    </ClothesContext.Provider>
  );
}
export default ClothesContext;

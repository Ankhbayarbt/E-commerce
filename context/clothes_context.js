"use client";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { getCookie } from "cookies-next";
const ClothesContext = createContext();
const initialState = {
  clothes: [],
  loading: false,
  error: null,
};
export function ClothesWrapper({ children }) {
  const [state, setState] = useState(initialState);
  const [clothes, setClothes] = useState("asdasd");
  const loadClothes = async () => {
    const token = getCookie("token");
    const clothes = await axios.get("http://localhost:3001/api/clothes", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(clothes);
    setState({ ...state, clothes: clothes.data.data });
  };
  return (
    <ClothesContext.Provider value={{ state, loadClothes }}>
      {children}
    </ClothesContext.Provider>
  );
}
export default ClothesContext;

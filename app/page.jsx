"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";
import Image from "next/image";

const HomePage = async () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div>
        <img src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div>suuld nemegsenguud</div>
    </div>
  );
};

export default HomePage;

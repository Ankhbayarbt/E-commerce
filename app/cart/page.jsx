"use client";
import ItemInCart from "@/components/clothes/cart_clothes";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import ClothesContext from "@/context/clothes_context";
import UserContext from "@/context/user_context";
import { useRouter } from "next/navigation";
const CartPage = () => {
  const [isLooggedIn, setLoggedIn] = useState(false);
  const clCtx = useContext(ClothesContext);
  const usCtx = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    clCtx.loadCartItems();
    usCtx
      .authorization()
      .then((res) => {
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
  return (
    <>
      {isLooggedIn ? (
        <div>
          <div>
            {clCtx.cartItems.map((el, i) => (
              <ItemInCart cartItem={el} key={i} />
            ))}
          </div>

          <div className="flex justify-center my-6">
            <button
              type="button"
              class="bg-green-500 inline-block rounded mx-4 bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              Төлбөр төлөх
            </button>
            <button
              onClick={() => {
                clCtx.removeAllFromCart();
              }}
              type="button"
              class="bg-red-500 inline-block rounded mx-4 bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
            >
              Бүх барааг хасах
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartPage;

import ClothesContext from "@/context/clothes_context";
import { useContext } from "react";

const ItemInCart = ({ cartItem }) => {
  const clCtx = useContext(ClothesContext);
  return (
    <div className="flex bg-white w-full my-3">
      <div className="flex justify-between w-full">
        <div className="flex ">
          <img className="h-44 w-48" src={cartItem.clothes_id.image} />
          <div className="flex items-center flex-col justify-center">
            <div className="text-3xl font-bold my-4 ml-5">
              {cartItem.clothes_id.name}
            </div>
            <div className="text-xl my-2 ml-5">
              id: {cartItem.clothes_id._id}
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-around  items-center mr-5 ">
          <div className="text-4xl font-bold text-green-400">
            {cartItem.clothes_id.price}
          </div>
          <div>
            <button
              onClick={() => {
                clCtx.removeFromCart(cartItem._id);
              }}
              type="button"
              class="bg-red-500 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
            >
              Хасах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInCart;

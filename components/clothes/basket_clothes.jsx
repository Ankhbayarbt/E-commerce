const ClothesInBasket = () => {
  return (
    <div className="flex bg-white w-full my-3">
      <div className="flex justify-between w-full">
        <div className="flex ">
          <img
            className="h-44 w-48"
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex items-center flex-col justify-center">
            <div className="text-3xl font-bold my-4 ml-5">Хар өнгийн цамц</div>
            <div className="text-xl my-2 ml-5">id: 12dwadquh1238udni12dni</div>
          </div>
        </div>

        <div className=" flex flex-col justify-around  items-center mr-5 ">
          <div className="text-4xl font-bold text-green-400">120000</div>
          <div>
            <button
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

export default ClothesInBasket;

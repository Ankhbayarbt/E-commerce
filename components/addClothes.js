// components/AddProductPage.js
import UserContext from "@/context/user_context";
import axios from "axios";
import React, { useContext, useState } from "react";
import { getCookie } from "cookies-next";
const AddClothes = ({ onAddProduct }) => {
  const ctx = useContext(UserContext);
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    setProduct({ ...product, image: base64 });
  };
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
    description: "",
    image: null,
  });

  const handleAddProduct = () => {
    onAddProduct(product);
    setProduct({
      name: "",
      category: "",
      price: 0,
      description: "",
      image: "",
    });
  };
  const store = async () => {
    console.log(product);
    const token = getCookie("token");
    console.log(token);
    try {
      await axios.post(
        "http://localhost:3001/api/clothes",
        {
          name: product.name,
          category: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Хувцас нэмэх</h2>
        <div className="mb-4">
          <label
            htmlFor="productId"
            className="block text-sm font-medium text-gray-900"
          >
            Нэр
          </label>
          <input
            type="text"
            id="productId"
            name="productId"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Бүтээгдэхүүний нэр"
            value={product.id}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Бүтээгдэхүүний төрөл
          </label>
          <select
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Цамц</option>
            <option value="US">Өмд</option>
            <option value="CA">Гутал</option>
            <option value="FR">Подволк</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
            Үнэ
          </label>
          <input
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            type="number"
            id="price"
            name="price"
            placeholder="Үнийн дүнгээ бичнэ үү."
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
            Зургаа оруулна уу.
          </label>
          <input
            onChange={(e) => {
              uploadImage(e);
            }}
            class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productDescription"
            className="block text-sm font-medium text-gray-900"
          >
            Бүтээгдэхүүний мэдээлэл
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Дэлгэрэнгүй мэдээллийг оруулна уу."
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => {
            store();
          }}
        >
          Бүртгэх
        </button>
      </div>
    </div>
  );
};

export default AddClothes;

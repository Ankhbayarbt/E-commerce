// components/ProductListTable.js
import ClothesContext from "@/context/clothes_context";
import moment from "moment";
import React, { useContext } from "react";

const ProductListTable = () => {
  const clCtx = useContext(ClothesContext);
  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-900 ">
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              ID
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Нэр
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Төрөл
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Үнэ
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Мэдээлэл
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Огноо
            </th>
          </tr>
        </thead>
        <tbody>
          {clCtx.clothes?.map?.((clothes, i) => (
            <tr
              key={i}
              className="transition duration-300 ease-in-out hover:bg-gray-100"
            >
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {clothes._id}
              </td>

              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {clothes.name}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {clothes.category}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {clothes.price}
              </td>

              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                <p class="line-clamp-2">{clothes.description}</p>
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {moment(clothes.created_date).calendar()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListTable;

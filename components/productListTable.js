// components/ProductListTable.js
import React from "react";

const ProductListTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-900">
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
          {products.map((product) => (
            <tr
              key={product._id}
              className="transition duration-300 ease-in-out hover:bg-gray-100"
            >
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {product.name}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {product.category}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {product.price}
              </td>

              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                <p class="line-clamp-2">{product.description}</p>
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {product.created_date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListTable;

import React from "react";

const UserListTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-900">
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Нэр
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Email
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Нууц үг
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.name}
              className="transition duration-300 ease-in-out hover:bg-gray-100"
            >
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {user.name}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {user.email}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {user.password}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;

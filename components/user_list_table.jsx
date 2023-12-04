import UserContext from "@/context/user_context";
import moment from "moment/moment";
import React, { useContext } from "react";
//admin page-дээр байгаа user-ийг хянах table-ийн component.
const UserListTable = ({ users }) => {
  const usCtx = useContext(UserContext);
  return (
    <div className="">
      <table className=" bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-900">
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              ID
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Овог
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Нэр
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Email
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Role
            </th>
            <th style={{ border: "1px solid #999999" }} className="py-3 px-4">
              Огноо
            </th>
          </tr>
        </thead>
        <tbody>
          {usCtx.users?.map?.((user) => (
            <tr
              key={user._id}
              className="transition duration-300 ease-in-out hover:bg-gray-100"
            >
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {user._id}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {user.lname}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {user.fname}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {user.email}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {user.role}
              </td>
              <td style={{ border: "1px solid #999999" }} className="py-2 px-4">
                {moment(user.createdAt).calendar()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;

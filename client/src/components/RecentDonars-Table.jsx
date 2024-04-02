import React from "react";
import { Badge } from "@nextui-org/react";
const RecentDonars = ({ donar }) => {
  return (
    <tr className="border-b dark:border-gray-700" key={donar.id}>
      <td className="px-4 py-2 text-gray-900 dark:text-white">
        {donar.fullname}
      </td>
      <td className="px-4 py-2 text-gray-900 dark:text-white">
        {donar.bloodType}
      </td>
      <td className="px-4 py-2 text-gray-900 dark:text-white">
        {donar.status === "finished" ? (
          <span className="text-white bg-green-500 py-1 px-2 rounded-full font-semibold">
            {donar.status}
          </span>
        ) : (
          <span className="px-2 py-1 rounded-full text-white bg-red-700 font-semibold">
            {donar.status}
          </span>
        )}
      </td>
      <td className="px-4 py-2 text-gray-900 dark:text-white">
        {donar.createdAt.slice(0, 10)}
      </td>
    </tr>
  );
};

export default RecentDonars;

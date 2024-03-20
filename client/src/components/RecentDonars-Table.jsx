import React from 'react'

const RecentDonars = ({donar}) => {
  return (
    <tr
    className="border-b dark:border-gray-700"
    key={donar.id}
  >
    <td className="px-4 py-2 text-gray-900 dark:text-white">
      {donar.fullname}
    </td>
    <td className="px-4 py-2 text-gray-900 dark:text-white">
      {donar.bloodType}
    </td>
    <td className="px-4 py-2 text-gray-900 dark:text-white">
      {donar.status}
    </td>
    <td className="px-4 py-2 text-gray-900 dark:text-white">
      {donar.createdAt.slice(0, 10)}
    </td>
  </tr>
  )
}

export default RecentDonars
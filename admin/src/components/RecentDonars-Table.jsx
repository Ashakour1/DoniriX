import React from "react";
import { Badge } from "@nextui-org/react";

const RecentDonars = ({ donors }) => {
  return (
    <div className="w-full  mx-auto p-6 bg-transparent border border-Accent rounded-lg">
      <h2 className="text-2xl font-bold text-Accent">Recent Blood Donors</h2>
      <p className="mt-2 text-gray-600">
        This table shows our most recent blood donors, their blood types,
        donation times, and locations.
      </p>

      <div className="mt-6 overflow-x-auto rounded-md">
        <table className="min-w-full  table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="border border-gray-200 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Blood Type
              </th>
              <th className="border border-gray-200 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Donation Time
              </th>
              <th className="border border-gray-200 px-6 py-3 text-right text-sm font-semibold text-gray-700">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td className="border border-gray-200 px-6 py-4 text-sm text-gray-900 font-medium">
                  {donor.name}
                </td>
                <td className="border border-gray-200 px-6 py-4 text-sm">
                  {/* <Badge
                    variant="flat"
                    className="px-2 py-1 bg-gray-100 text-gray-700 font-semibold rounded-full"
                  >

                  </Badge> */}
                  {donor.bloodType}
                </td>
                <td className="border border-gray-200 px-6 py-4 text-sm text-gray-700">
                  {donor.updatedAt.slice(0, 10)}
                </td>
                <td className="border border-gray-200 px-6 py-4 text-right text-sm text-gray-700">
                  {donor.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDonars;

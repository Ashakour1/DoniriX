import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

import { FaSignOutAlt } from "react-icons/fa";
import { BiCalendarEdit, BiDonateBlood, BiHomeAlt } from "react-icons/bi";
import { MdBloodtype, MdDashboard, MdLogout } from "react-icons/md";
const Sidebar = () => {
  const { logOut } = useUser();

  return (
    <div className="bg-gray-300 w-64 p-6 border-r  fixed h-full top-[55px]">
      <nav>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-600 ">Main</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium  hover:bg-blue-300"
                prefetch={false}
              >
                <MdDashboard className="h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/donors"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium  hover:bg-blue-300"
                prefetch={false}
              >
                <BiDonateBlood className="h-5 w-5" />
                donors
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium  hover:bg-blue-300"
                prefetch={false}
              >
                <MdBloodtype className="h-5 w-5" />
                Blood Types
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2 pt-80">
          <h3 className="text-sm font-semibold text-gray-600 ">Settings</h3>
          <ul className="space-y-1">
            <li>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                prefetch={false}
                onClick={logOut}
              >
                <MdLogout className="h-5 w-5" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

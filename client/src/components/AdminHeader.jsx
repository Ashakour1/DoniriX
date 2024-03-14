import React from "react";
import { LuHeartPulse } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import { useUser } from "../hooks/useUser";

const AdminHeader = () => {
  const { logOut } = useUser();

  return (
    <header className="bg-black border-gray-800">
      <div className="max-w-[1200px] text-white mx-auto flex items-center h-14 shrink-0 px-4 border-b ">
        <Link className="flex items-center font-semibold " href="#">
          <LuHeartPulse className="text-3xl text-red-600"/>
        </Link>
        <nav className="flex-1 ml-6">
          <Link to="/dashboard" className="font-medium" href="#">
            Dashboard
          </Link>
          <Link to="/dashboard" className="ml-4 font-medium" href="#">
            Donors
          </Link>
        </nav>
        <button
          className="bg-green-600 text-white flex items-center py-2 px-4 rounded"
          onClick={logOut}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
import React from "react";
import { LuHeartPulse } from "react-icons/lu";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="bg-gray-200 border-gray-800 fixed w-full">
      <div className="max-w-[1200px] text-white mx-auto flex items-center h-14 shrink-0 px-4 border-b ">
        <Link className="flex items-center font-semibold " href="#">
          <LuHeartPulse className="text-3xl text-red-600" />
        </Link>{" "}
      </div>
    </header>
  );
};

export default AdminHeader;

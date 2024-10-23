// components/Sidebar.js
import { LayoutDashboard, Activity, Users, LogOut } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { MdBloodtype } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  const { logOut } = useUser();

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-4 flex-grow">
        <div className="my-2">
          <img src="/logo.png" alt="logo.png" className="w-32" />
        </div>
        <nav>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-Accent rounded-md ${
                isActive ? "bg-Accent text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </NavLink>
          <NavLink
            to="/donors"
            className={({ isActive }) =>
              `flex active:bg-gray-500 items-center px-4 py-2 mt-2 text-Accent rounded-md ${
                isActive ? "bg-Accent text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <Activity className="mr-3 h-5 w-5" />
            Donations
          </NavLink>
          <NavLink
            to="/recipients"
            className={({ isActive }) =>
              `flex active:bg-gray-500 items-center px-4 py-2 mt-2 text-Accent rounded-md ${
                isActive ? "bg-Accent text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <Users className="mr-3 h-5 w-5" />
            Recipients
          </NavLink>
          <NavLink
            to="/blood-types"
            className={({ isActive }) =>
              `flex active:bg-gray-500 items-center px-4 py-2 mt-2 text-Accent rounded-md ${
                isActive ? "bg-Accent text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <MdBloodtype className="mr-3 h-5 w-5" />
            Blood Types
          </NavLink>
        </nav>
      </div>
      <div className="p-4">
        <Link
          onClick={logOut}
          className="flex items-center px-4 py-2 text-Accent hover:bg-gray-200 rounded-md"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

// components/Sidebar.js
import { LayoutDashboard, Activity, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl text-blue-400 font-bold text-primary mb-6">
          Badbaadiye
        </h2>
        <nav>
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link
            to="/donors"
            className="flex active:bg-gray-500 items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200 rounded-md"
          >
            <Activity className="mr-3 h-5 w-5" />
            Donations
          </Link>
          <Link
            to="/recipients"
            className="flex active:bg-gray-500 items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200 rounded-md"
          >
            <Users className="mr-3 h-5 w-5" />
            Recipients
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200 rounded-md"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

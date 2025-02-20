import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUtensils, FaUsers } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { LayoutDashboard, Menu, Settings, X } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate()
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn, setRole, setName } =
  useContext(AuthContext);

const handleLogout = () => {
  setIsLoggedIn(false);
  setRole("guest");
  setName("Guest");
  localStorage.removeItem("auth");
  localStorage.removeItem("role");
  localStorage.removeItem("name");
  navigate("/admin-login"); // ✅ Redirect to home page after logout
};
  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard className="w-6 h-6" /> },
    { name: "Restaurant", path: "/admin/restaurants", icon: <MdRestaurantMenu className="w-6 h-6" /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers className="w-6 h-6" /> },
    { name: "Dishes", path: "/admin/dishes", icon: <FaUtensils className="w-6 h-6" /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings className="w-6 h-6" /> },
    { name: "View Restaurants", path: "/admin/view-restaurants", icon: <MdRestaurantMenu className="w-6 h-6" /> }, // New Button
  ];

  return (
    <div
      className={`${
        isSidebarOpen ? "w-72" : "w-20"
      } h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white shadow-2xl transition-all duration-300 flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-700">
        <h1 className={`text-2xl font-semibold ${isSidebarOpen ? "block" : "hidden"}`}>Admin Panel</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-300 hover:text-white">
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg text-lg transition duration-300 ${
                  location.pathname === item.path
                    ? "bg-gray-800 shadow-md"
                    : "hover:bg-gray-800"
                }`}
              >
                {item.icon}
                <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer - Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button onClick={handleLogout} className="w-full bg-gray-800 py-2 rounded-lg hover:bg-gray-700 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

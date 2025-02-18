import { useState } from "react";
import { Menu, X, LayoutDashboard, Settings, User } from "lucide-react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
     <AdminSidebar />


      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
         <AdminHeader />

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;




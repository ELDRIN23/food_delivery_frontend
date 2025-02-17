import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="w-full flex min-h-screen ">
      {/* Admin sidebar */}
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminHeader />
        {/* Admin header */}
        <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

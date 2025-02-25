// import React from "react";

// const AdminHeader = ({ isSidebarOpen }) => {
//   return (
//     <header className="bg-white shadow-md p-4 flex items-center justify-between">
//     <h2 className="text-lg font-semibold">Admin Panel</h2>
//     <div className="flex items-center space-x-4">
//       <span className="text-gray-600">Welcome, Admin</span>
      
//     </div>
//   </header>

//   );
// };

// export default AdminHeader;



import React from "react";

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col sm:flex-row items-center justify-between">
      <h2 className="text-lg font-semibold text-center sm:text-left w-full sm:w-auto">Admin Panel</h2>
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <span className="text-gray-600">Welcome, Admin</span>
      </div>
    </header>
  );
};

export default AdminHeader;

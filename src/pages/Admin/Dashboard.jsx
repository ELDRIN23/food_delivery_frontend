import React from "react";
import { FaUsers, FaDollarSign, FaShoppingCart, FaUtensils } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { title: "Total Users", value: "1,235", icon: <FaUsers className="text-blue-500 text-4xl" /> },
    { title: "Revenue", value: "$42,580", icon: <FaDollarSign className="text-green-500 text-4xl" /> },
    { title: "Orders", value: "3,230", icon: <FaShoppingCart className="text-yellow-500 text-4xl" /> },
    { title: "Total Dishes", value: "120", icon: <FaUtensils className="text-red-500 text-4xl" /> },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-center">
            <div className="p-4 bg-gray-100 rounded-lg">{stat.icon}</div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-600">{stat.title}</h2>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for Charts */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg h-64 flex items-center justify-center">
          <p className="text-gray-500">Chart 1 (Replace with real chart)</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg h-64 flex items-center justify-center">
          <p className="text-gray-500">Chart 2 (Replace with real chart)</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

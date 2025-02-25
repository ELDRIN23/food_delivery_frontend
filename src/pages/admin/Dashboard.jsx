

// import React from "react";
// import { FaUsers, FaDollarSign, FaShoppingCart, FaUtensils } from "react-icons/fa";

// const features = [
//   { title: "User Management", description: "Manage all users in one place", icon: <FaUsers className="text-blue-500 text-5xl" /> },
//   { title: "Revenue Tracking", description: "Monitor earnings & financial stats", icon: <FaDollarSign className="text-green-500 text-5xl" /> },
//   { title: "Order Management", description: "Keep track of all incoming orders", icon: <FaShoppingCart className="text-yellow-500 text-5xl" /> },
//   { title: "Dish Inventory", description: "Manage & update available dishes", icon: <FaUtensils className="text-red-500 text-5xl" /> },
// ];

// const Dashboard = () => {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Features</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
//             <h2 className="text-xl font-semibold text-gray-700 mt-4">{feature.title}</h2>
//             <p className="text-gray-500 text-center mt-2">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React from "react";
import { FaUsers, FaDollarSign, FaShoppingCart, FaUtensils } from "react-icons/fa";

const features = [
  { title: "User Management", description: "Manage all users in one place", icon: <FaUsers className="text-blue-500 text-5xl" /> },
  { title: "Revenue Tracking", description: "Monitor earnings & financial stats", icon: <FaDollarSign className="text-green-500 text-5xl" /> },
  { title: "Order Management", description: "Keep track of all incoming orders", icon: <FaShoppingCart className="text-yellow-500 text-5xl" /> },
  { title: "Dish Inventory", description: "Manage & update available dishes", icon: <FaUtensils className="text-red-500 text-5xl" /> },
];

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center px-4">
        Admin Dashboard Features
      </h1>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-5 sm:p-6 rounded-2xl shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mt-3 sm:mt-4 text-center">
              {feature.title}
            </h2>
            <p className="text-gray-500 text-center mt-2 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

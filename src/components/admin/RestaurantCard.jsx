import React from 'react';

function RestaurantCard({ name, adders, image, menu, hours, phone }) {
  console.log(image)
  return (
    <div className="shadow-lg rounded-lg overflow-hidden p-4   bg-white">
      <img 
        src={Array.isArray(image) ? image[0] : image || "https://via.placeholder.com/400"} 
        alt={name ?? "Restaurant Image"} 
        className="w-full h-48 object-cover rounded-md" 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{name ?? "Restaurant Name"}</h2>
        <p className="text-gray-600 text-sm mb-2">{adders ?? "Address not available"}</p>
        <p className="text-gray-700 font-semibold">
          Menu: {Array.isArray(menu) ? menu.join(", ") : menu ?? "Menu details not available"}
        </p>
        <p className="text-gray-700 text-sm">Hours: {hours ?? "Hours not available"}</p>
        <p className="text-gray-700 text-sm">Phone: {phone ?? "Phone not available"}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;

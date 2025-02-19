import React from 'react';

function RestaurantCard({ name, adders, image, menu, hours, phone }) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden p-4 max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{name ?? "Restaurant Name"}</h2>
        <p className="text-gray-600 text-sm mb-2">{adders ?? "Address not available"}</p>
        <p className="text-gray-700 font-semibold">Menu: {menu ?? "Menu details not available"}</p>
        <p className="text-gray-700 text-sm">Hours: {hours ?? "Hours not available"}</p>
        <p className="text-gray-700 text-sm">Phone: {phone ?? "Phone not available"}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
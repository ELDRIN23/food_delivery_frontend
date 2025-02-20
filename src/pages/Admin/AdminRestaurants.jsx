import React, { useState } from 'react';
import { axiosInstance } from '../../config/axiosInstance';

function AddRestaurant() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    rating: '',
    menu: '',
    operating_hours: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('adders', formData.address);
    data.append('phone', formData.phone);
    data.append('rating', formData.rating);
    data.append('menu', formData.menu);
    data.append('operating_hours', formData.operating_hours);
    data.append('image', formData.image);

    try {
      const res = await axiosInstance.post('/resturant/add', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(res.data);
      alert('Restaurant added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add restaurant.');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add Restaurant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Restaurant Name" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="rating" placeholder="Rating (out of 5)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="menu" placeholder="Menu (comma separated)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="operating_hours" placeholder="Operating Hours" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="file" name="image" onChange={handleFileChange} className="w-full p-2 border rounded" accept="image/*" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestaurant;

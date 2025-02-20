import React, { useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function UserUpdateModal({ onClose, isOpen, userData }) {
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    address: userData?.address || "",
    phone: userData?.phone || "",
    image: null,
    previewImage: userData?.profilePic || "", // Image preview
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        previewImage: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("phone", formData.phone);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await axiosInstance.put("/user/updateprofile ", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Update Success:", response.data);
      onClose();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-[999] w-full h-screen flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl w-96 border border-gray-700 relative"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-all">
          <XCircle size={24} />
        </button>

        {/* Profile Image Preview */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-24 h-24 border-4 border-gray-700 rounded-full overflow-hidden shadow-md">
            {formData.previewImage ? (
              <img src={formData.previewImage} alt="Profile Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer"
            accept="image/*"
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
            >
              Update
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

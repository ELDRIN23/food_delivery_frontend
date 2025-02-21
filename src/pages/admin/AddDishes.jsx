import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

export const AddDishes = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    restaurant_id: "",
    name: "",
    rating: "",
    price: "",
    description: "",
    availability: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch restaurant list
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axiosInstance.get("/resturant/select-list");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Failed to load restaurants", error);
      }
    };
    loadData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file change and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.restaurant_id) newErrors.restaurant_id = "Restaurant is required";
    if (!formData.name) newErrors.name = "Dish Name is required";
    if (!formData.rating || formData.rating < 0 || formData.rating > 5)
      newErrors.rating = "Rating must be between 0 and 5";
    if (!formData.price || formData.price <= 0) newErrors.price = "Price must be greater than 0";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.availability) newErrors.availability = "Availability is required";
    if (!formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "image") {
        data.append(key, formData[key]); // Append image
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      await axiosInstance.post("/dishes/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Dish added successfully!");
      setFormData({
        restaurant_id: "",
        name: "",
        rating: "",
        price: "",
        description: "",
        availability: "",
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      alert("Failed to add dish.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Dish</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Restaurant Selection */}
        <div>
          <label className="block font-medium">Select Restaurant</label>
          <select
            name="restaurant_id"
            value={formData.restaurant_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>
              Select Restaurant
            </option>
            {restaurants.map((rest) => (
              <option value={rest._id} key={rest._id}>
                {rest.name}
              </option>
            ))}
          </select>
          {errors.restaurant_id && <p className="text-red-500 text-sm">{errors.restaurant_id}</p>}
        </div>

        {/* Dish Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Dish Name"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Rating */}
        <div>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            placeholder="Rating (out of 5)"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>

        {/* Price */}
        <div>
          <input
            type="number"
            name="price"
            value={formData.price}
            placeholder="Price"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        {/* Description */}
        <div>
          <textarea
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Availability */}
        <div>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Availability</option>
            <option value="yes">Available</option>
            <option value="no">Unavailable</option>
          </select>
          {errors.availability && <p className="text-red-500 text-sm">{errors.availability}</p>}

        </div>

        {/* File Upload with Preview */}
        <div>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-2 h-32 w-full object-cover rounded" />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full text-white p-2 rounded ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Dish"}
        </button>
      </form>
    </div>
  );
};

import { axiosInstance } from "../../config/axiosInstance";

const AdminDishCards = ({ dishes, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/dishes/${dishes._id}`);
      onDelete(dishes._id); // Update the state in the parent component
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold">{dishes.name}</h2>
      <p>{dishes.description}</p>
      <button
        onClick={handleDelete}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default AdminDishCards;



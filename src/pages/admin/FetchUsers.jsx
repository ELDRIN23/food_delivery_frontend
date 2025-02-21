import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/user/users");
      setUsers(response.data.users);
    } catch (error) {
      setError("Failed to load users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p className="text-gray-300 text-center mt-10">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-200 border-b-2 border-gray-700 pb-2">All Users</h2>
      {users.length === 0 ? (
        <p className="text-gray-400">No users found.</p>
      ) : (
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-xl transition duration-300"
            >
              {user.profilePic && (
                <img
                  src={user.profilePic}
                  alt={`${user.name}'s profile`}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-gray-600"
                />
              )}
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-gray-200">{user.name}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
                <p className="text-sm text-gray-400">{user.phone}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchUsers;
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";


function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("users", {
        withCredentials: true, 
      });
      setUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              {user.profilePic && (
                <img src={user.profilePic} alt={user.name} width="100" />
              )}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchUsers;

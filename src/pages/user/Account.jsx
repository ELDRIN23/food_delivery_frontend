import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import UserUpdateModal from "../../components/User/UserUpdateModal";

export default function Account() {
  const [userData, setUserData] = useState(null);
  const [orderList, setOrderList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axiosInstance.get("/user/fetch-orders");
        const { orders, user } = res.data;
        setUserData(user);
        setOrderList(orders);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <UserUpdateModal isOpen={isModalOpen} userData={userData} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex flex-col items-center">
        {/* Account Details */}
        <div className="max-w-3xl w-full bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg backdrop-blur-lg border border-gray-700">
          <h2 className="text-3xl font-extrabold mb-4 text-blue-400">Account Details</h2>
          <p className="text-lg">
            <strong className="text-blue-300">Account Holder:</strong> {userData?.name}
          </p>
          <p className="text-lg">
            <strong className="text-blue-300">Address:</strong> {userData?.address}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            Edit Profile
          </button>
        </div>

        {/* Orders Section */}
        <div className="max-w-3xl w-full mt-8 bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg backdrop-blur-lg border border-gray-700">
          <h2 className="text-3xl font-extrabold mb-4 text-green-400">Your Orders</h2>
          {orderList.length === 0 ? (
            <p className="text-gray-400 text-center">No orders found.</p>
          ) : (
            <div className="space-y-6">
              {orderList.map((order) => (
                <div
                  key={order._id}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-yellow-300">Order ID: {order._id}</h3>
                  <p className="text-gray-400">Total: <span className="text-yellow-400">{order.total_amount} Rs</span></p>
                  <p className="text-gray-400">Status: <span className={`font-semibold ${order.order_status === 'Completed' ? 'text-green-400' : 'text-red-400'}`}>{order.order_status}</span></p>

                  {/* Order Items */}
                  <div className="mt-4 space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item.dish_id}
                        className="flex justify-between items-center bg-gray-800 p-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300"
                      >
                        <p className="text-white">{item.dish_name}</p>
                        <p className="text-blue-400">
                          {item.quantity} x <span className="text-yellow-400">{item.price_per_item} Rs</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

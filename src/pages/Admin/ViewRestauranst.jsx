import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import RestaurantCard from '../../components/admin/RestaurantCard';

function ViewRestauranst() { // Keeping the name as you had it
    const [resData, setResData] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const res = await axiosInstance.get('resturant');
            setResData(res?.data || []);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">View Restaurants</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resData.length > 0 ? (
                    resData.map((data, index) => (
                        <RestaurantCard 
                            key={index} 
                            name={data?.name} 
                            adders={data?.adders} 
                            menu={data?.menu} 
                            image={data?.image}
                            hours={data?.operating_hours} // Ensure hours are passed
                            phone={data?.phone} // Ensure phone number is displayed
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No restaurants available.</p>
                )}
            </div>
        </div>
    );
}

export default ViewRestauranst;

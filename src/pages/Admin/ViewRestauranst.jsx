import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import RestaurantCard from '../../components/admin/RestaurantCard';

function ViewRestauranst() {
    const [resData, setResData] = useState([]);
  
    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = () => {
        axiosInstance({
            method: 'GET',
            url: 'resturant'
        }).then((res) => {
            console.log(res);
            setResData(res?.data || []);
        }).catch(error => {
            console.error('Error fetching restaurants:', error);
        });
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">View Restaurants</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resData?.map((data, index) => (
                    <RestaurantCard 
                        key={index} 
                        name={data?.name} 
                        adders={data?.adders} 
                        menu={data?.menu} 
                    />
                ))}
            </div>
        </div>
    );
}

export default ViewRestauranst;
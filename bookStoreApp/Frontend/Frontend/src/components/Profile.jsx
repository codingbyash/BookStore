import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Import Sidebar component
import Order from './Order'; // Import Order component

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://localhost:4002/user/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUserData(response.data);
        } catch (err) {
            console.error("Error fetching user profile:", err);
            setError('No user data found');
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    if (error) return <div className="text-red-500">{error}</div>;
    if (!userData) return <div>Loading...</div>;

    return (
        <div className="flex">
            <Sidebar /> {/* Include the Sidebar */}
            <div className="ml-64 p-6">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <p className="text-lg">Full Name: {userData.fullname}</p>
                <p className="text-lg">Email: {userData.email}</p>
                
                {/* Include the Order component */}
                <Order />
            </div>
        </div>
    );
};

export default Profile;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    const fetchOrders = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://localhost:4002/user/orders', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOrders(response.data);
        } catch (err) {
            console.error("Error fetching orders:", err);
            setError('No orders found');
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (error) return <div className="text-red-500">{error}</div>;
    if (!orders.length) return <div>Loading orders...</div>;

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
            <ul className="space-y-4">
                {orders.map(order => (
                    <li key={order._id} className="border p-4 rounded-lg">
                        <h3 className="font-bold">Order ID: {order._id}</h3>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p>Status: {order.status}</p>
                        <h4 className="mt-2">Items:</h4>
                        <ul>
                            {order.items.map(item => (
                                <li key={item.productId}>
                                    {item.name} - Quantity: {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Order;

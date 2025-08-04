import React, { useEffect, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../../../config/config";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      console.log(Backend_Url)
      const res = await axios.get(`${Backend_Url}/api/orders/all`);
      setOrders(res.data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await axios.delete(`${Backend_Url}/api/orders/${orderId}`);
        setOrders(orders.filter(order => order._id !== orderId));
      } catch (error) {
        console.error("Failed to delete order", error);
        alert("Failed to delete order");
      }
    }
  };

 
  

  if (loading) return <p className="text-center mt-10">Loading orders...</p>;

  return (
    <div className=" max-w-full mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">All Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="min-w-full border border-gray-300 rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
            
              <th className="border px-4 py-2">Name</th>              
              <th className="border px-4 py-2">Payment Method</th>   
              <th className="border px-4 py-2">Items</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => {
              const totalPrice = order.items.reduce((sum, item) => sum + (item.price || 0), 0);

              return (
                <tr key={order._id} className="hover:bg-gray-50">
                  
                  <td className="border px-4 py-2">Name: {order.name}
                                                <p>Mobile: {order.phone}</p> 
                                                <p className="text-sm">Address: {order.address}</p></td>               
                  <td className="border px-4 py-2">{order.paymentMethod}
                                                <p>{new Date(order.createdAt).toLocaleString()}</p></td>
                
                  <td className="border px-4 py-2 max-w-xs">
                    <ul>
                      {order.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 mb-1">
                          {item.image && (
                            <img
                              src={`${Backend_Url}/uploads/${item.image}`}
                              alt={item.name}
                              className="w-10 h-10 object-cover rounded"
                            />
                          )}
                          <span>{item.name} - ৳{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border px-4 py-2 font-semibold">৳{totalPrice}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrders;  
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../../../config/config";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
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
    <div className="p-5 max-w-4xl mx-auto mt-10">
        <div>
            
        </div>
      <h2 className="text-3xl font-bold mb-6">All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => {
          const totalPrice = order.items.reduce((sum, item) => sum + (item.price || 0), 0);

          return (
            <div key={order._id} className="border p-4 mb-4 rounded shadow bg-white">
              <div className="flex justify-between items-center">
                <div>
                    <table className="min-w-full border text-sm text-left">
                            <thead className="bg-gray-100 text-gray-700">
                              <tr>
                                <th className="border p-2">Image</th>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Category</th>
                                <th className="border p-2">Price</th>
                                 <th className="border p-2">pryment</th>
                                  <th className="border p-2">date</th>v
                                <th className="border p-2">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map((product) => (
                                <tr key={product._id} className="border-b hover:bg-gray-50">
                                  <td className="border p-2">
                                    <img
                                      src={`${Backend_Url}/uploads/${product.images?.[0]}`}
                                      alt={product.name}
                                      className="w-20 h-16 object-cover rounded"
                                    />
                                  </td>
                                  <td className="border p-2">{order.name}</td>
                                  <td className="border p-2 capitalize">{order.phone}</td>
                                  <td className="border p-2">{order.address}</td>
                                    <td className="border p-2">{order.paymentMethod}</td>
                                     <td className="border p-2">{new Date(order.createdAt).toLocaleString()}</td>
                                  
                                  <td className="border p-2 flex gap-2">
                                    
                                    <button
                                      onClick={() => handleDelete(product._id)}
                                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                </div>
               
                    
              </div>

              

              

              <div className="mt-3 flex justify-between items-center">
                <p><strong>Total Price:</strong> ৳{totalPrice}</p>
                
              </div>
            </div>
            
          );
        })
      )}
    </div>
  );
};

export default AdminOrders;

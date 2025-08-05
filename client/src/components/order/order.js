import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import { Backend_Url } from "../../config/config";
import axios from "axios";

const OrderPage = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "cod",
  });

  const total = cartItems?.reduce((sum, item) => sum + item.price, 0) || 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all fields");
      return;
    }
    if (!cartItems || cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      const res = await axios.post(`${Backend_Url}/api/orders/place`, {
        ...formData,
        items: cartItems.map((item) => ({
          _id: item._id,
          name: item.name,
          price: item.price,
          image: item.images?.[0],
          quantity: item.quantity || 1,
          size: item.size || "",
        })),
      });

      if (res.status === 201) {
        alert("✅ Order placed!");
        clearCart();
      } else {
        alert("❌ Order failed: " + (res.data?.error || ""));
      }
    } catch (error) {
      console.error("Order error:", error.response?.data || error.message);
      alert("❌ Failed to place order: " + (error.response?.data?.error || error.message));
    }
  };

  return (
     <div
      className="min-h-screen bg-center bg-no-repeat bg-cover py-10 px-4 md:px-10 lg:px-32 mt-20"
      style={{
        backgroundImage: `url('/images/bgs.jpeg')`,
        backgroundAttachment: 'fixed', 
      }}
    >
<div className=" bg-opacity-90 rounded-xl shadow-lg p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          

     {/* Cart Preview */}
          <div className=" shadow rounded p-4">
            <h2 className="text-xl font-bold mb-4">Cart Items</h2>
            <table className="w-full">
              <thead>
                <tr className=" text-center">
                  <th className="py-2 px-2 md:px-4 border border-black">Image</th>
                  <th className="py-2 px-2 md:px-4 border border-black">Product</th>
                  <th className="py-2 px-2 md:px-4 border  border-black">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td className="py-3 px-2 md:px-4 border border-black flex justify-center">
                      <img
                        src={`${Backend_Url}/uploads/${item.images?.[0]}`}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="py-3 px-2 md:px-4 border border-black text-center">{item.name}</td>
                    <td className="py-3 px-2 md:px-4 border border-black text-center">৳{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-right font-bold mt-4">Total: ৳{total}</p>
          </div>

      {/* Form Section */}
     <div className="mt-5">
      <h1 className="text-xl font-bold mb-4">Orde Form</h1>
       <form onSubmit={handleSubmit} className="space-y-4  shadow p-4 rounded">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border px-2 py-1 w-full"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="border px-2 py-1 w-full"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border px-2 py-1 w-full"
        />
         <select
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        className="border px-2 py-1 w-full"
      >
        <option value="cod">Cash on Delivery</option>
        <option value="bkash">bKash</option>
      </select>
      <p className="text-lg font-bold">Total: ৳{total}</p>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Place Order
      </button>
      </form>
     </div>
    </div>
      </div>
    </div>
  );
};

export default OrderPage;

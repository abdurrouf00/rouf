import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import {Backend_Url} from "../../config/config"
import axios from "axios";

const OrderPage = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "Cod",
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
      const res = await axios.post(`${Backend_Url}/api/orders/create`, {
        ...formData,
        cartItems,
      });
      if (res.status === 201) {
        alert("✅ Order placed!");
        clearCart();
      } else {
        alert("❌ Order failed: " + res.data?.error || "");
      }
    } catch (error) {
      console.error("Order error:", error.response?.data || error.message);
      alert("❌ Failed to place order: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mt-40 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Place Your Order</h2>
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
        <option value="Cod">Cash on Delivery</option>
        <option value="bkash">bKash</option>
      </select>
      <p>Total: ৳{total}</p>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Place Order
      </button>
    </form>
  );
};

export default OrderPage;

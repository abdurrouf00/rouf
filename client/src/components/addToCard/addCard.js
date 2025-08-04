// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto mt-32 bg-white shadow-lg rounded">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Product</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Subtotal</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td className="py-3 px-4 border flex items-center gap-4">
                    <img
                      src={`http://localhost:4005/uploads/${item.images[0]}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="py-3 px-4 border">৳{item.price}</td>
                  <td className="py-3 px-4 border">৳{item.price}</td>
                  <td className="py-3 px-4 border text-center">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-right space-y-2">
            <p className="text-lg font-semibold">Subtotal: ৳{total}</p>
            <p className="text-green-600">Free Shipping</p>
            <p className="text-xl font-bold">Total: ৳{total}</p>
          </div>

          <div className="mt-6 flex justify-between">
            <Link to="/" className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
              ← Continue Shopping
            </Link>
            <Link to="/order" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Proceed to Checkout →
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

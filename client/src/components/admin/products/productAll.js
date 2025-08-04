// src/components/ProductList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Backend_Url } from "../../../config/config";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch products
  useEffect(() => {
    axios.get(`${Backend_Url}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // ✅ Delete handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${Backend_Url}/api/products/${id}`);
        setProducts(products.filter(product => product._id !== id));
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    }
  };

  // ✅ Edit handler
  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <table className="min-w-full border text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-b hover:bg-gray-50">
              <td className="border p-2">
                <img
                  src={`${Backend_Url}/uploads/${product.images?.[0]}`}
                  alt={product.name}
                  className="w-20 h-16 object-cover rounded"
                />
              </td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2 capitalize">{product.category}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => handleEdit(product._id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
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
  );
};

export default ProductList;

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Backend_Url } from "../../../config/config";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    type: "",
    category: "",
    price: "",
    description: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (let key in productData) {
        formData.append(key, productData[key]);
      }
      images.forEach((img) => {
        formData.append("images", img);
      });

      const res = await axios.post(`${Backend_Url}/api/products/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201) {
        toast.success("✅ Product Added Successfully!");
        setProductData({ name: "", type: "", category: "", price: "", description: "" });
        setImages([]);
      } else {
        toast.error("❌ Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Product submit error:", error);
      toast.error("❌ Error: " + error.message);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={productData.name} onChange={handleChange} placeholder="Product Name" required className="w-full border p-2 rounded" />
        <input type="text" name="type" value={productData.type} onChange={handleChange} placeholder="Product Type (e.g. Seasonal, Imported)" required className="w-full border p-2 rounded" />
        <input type="text" name="category" value={productData.category} onChange={handleChange} placeholder="Product Category (e.g. Fruit, Vegetable)" required className="w-full border p-2 rounded" />
        <input type="number" name="price" value={productData.price} onChange={handleChange} placeholder="Product Price" required className="w-full border p-2 rounded" />
        <textarea name="description" value={productData.description} onChange={handleChange} placeholder="Product Description" className="w-full border p-2 rounded" />
        <input type="file" name="images" onChange={handleImageChange} multiple required className="w-full border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Product</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;

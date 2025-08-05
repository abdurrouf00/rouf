import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Backend_Url } from "../../../config/config";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    type: "",
    category: "",
    price: "",
    description: "",
    images: [],
  });
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${Backend_Url}/api/products/${id}`)
      .then((res) => setProductData(res.data))
      .catch((err) => {
        toast.error("Product data load করতে সমস্যা হয়েছে");
        console.error("Error loading product data:", err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("type", productData.type);
    formData.append("category", productData.category);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    if (newImage) {
      formData.append("images", newImage);
    }

    try {
      await axios.put(`${Backend_Url}/api/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("✅ Product Updated");
      setTimeout(() => {
        navigate("/admin/product");
      }, 1500);
    } catch (err) {
      console.error("Update error:", err);
      toast.error("❌ Update করতে সমস্যা হয়েছে");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          className="w-full mb-3 border px-3 py-2 rounded"
        />
        <select
          name="type"
          value={productData.type}
          onChange={handleChange}
          required
          className="w-full mb-3 border px-3 py-2 rounded"
        >
          <option value="">Select Type</option>
          <option value="AC">AC</option>
          <option value="NON-AC">NON-AC</option>
        </select>
        <select
          name="category"
          value={productData.category}
          onChange={handleChange}
          required
          className="w-full mb-3 border px-3 py-2 rounded"
        >
          <option value="">Select Category</option>
          <option value="single">Single</option>
          <option value="deluxe">Deluxe</option>
          <option value="family">Family</option>
          <option value="premium">Premium</option>
        </select>
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="w-full mb-3 border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          value={productData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-3 border px-3 py-2 rounded"
        />
        {productData.images?.length > 0 && (
          <img
            src={`${Backend_Url}/uploads/${productData.images[0]}`}
            alt="Old"
            className="w-40 h-28 object-cover rounded border mb-3"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full mb-3 border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;

import React, { useEffect, useState } from "react";
import { Backend_Url } from "../../config/config";
import { useCart } from "../context/cartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const { addToCart } = useCart(); // ✅ Use context

  useEffect(() => {
    fetch(`${Backend_Url}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-6 text-lg">Loading products...</p>;
  if (error) return <p className="text-center mt-6 text-red-600">Error: {error}</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Available Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded p-4 shadow bg-white">
            {product.images && product.images.length > 0 && (
              <img src={`${Backend_Url}/uploads/${product.images[0]}`}
                alt={product.name}
                className="mt-2 rounded w-full h-52 object-cover cursor-pointer"
                onClick={() => setModalImage(`${Backend_Url}/uploads/${product.images[0]}`)}
              />
            )}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="font-bold">Price: ${product.price}</p>
              <button
                onClick={() => addToCart(product)} // ✅ Add to cart
                className="bg-gray-600 text-white px-8 py-1 rounded hover:bg-gray-700 mt-4"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Product Large"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setModalImage(null)}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;

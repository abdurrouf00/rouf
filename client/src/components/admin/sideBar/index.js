import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {


  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen fixed top-0 left-0 pt-16">
      <nav className="p-4">
        <ul>
          <li>
            <Link
              to="/admin"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Dashboard
            </Link>
          </li>

        <li className="mt-4">
            <Link
              to="/admin/product"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              All Products
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to="/admin/messages"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              messages
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to="/admin/order"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Order
            </Link>
          </li>

          <li className="mt-2">
            <Link
              to="/admin/add-product"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

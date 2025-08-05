import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/context/cartContext'; // ✅ এই লাইনটা যুক্ত করুন

const NavBar = () => {
  const { cartItems } = useCart(); // ✅ cartItems থেকে cart count নিন

  return (
    <nav className="bg-gray-200 text-black px-6 py-4 border-b-2 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <div className="flex gap-6 items-center text-md font-medium">
            <Link to="/" className="hover:text-blue-400 transition-all">Home</Link>
            <Link to="/products" className="hover:text-blue-400 transition-all">Products</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-all">Contact</Link>
            <Link to="/about" className="hover:text-blue-400 transition-all">About</Link>
            
           

            <Link to="/card" className="relative hover:text-blue-400 transition-all">
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="w-36 flex justify-end">
          <Link to="/login" className="bg-gray-200 border border-gray-400 text-black font-semibold py-2 px-6 rounded-full transition duration-200">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-200 text-black px-6 py-4 border-b-2 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <div className="flex gap-6 items-center text-md font-medium">
              <Link to="/" className="hover:text-blue-400 transition-all ">Home</Link>
              <Link to="/products" className="hover:text-blue-400 transition-all">Products</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-all">Contact</Link>

              <Link to="/about" className="hover:text-blue-400 transition-all">About</Link>
              <Link to="/skills" className="hover:text-blue-400 transition-all">Skills</Link>
              <Link to="/career" className="hover:text-blue-400 transition-all">Career</Link>
              <Link to="/card" className="hover:text-blue-400 transition-all">card</Link>
              
          
          </div>
        </div>

        {/* Right Side: Login */}
        <div className="w-36 flex justify-end">
          <Link to="/login"  className="bg-gray-200 border border-gray-400  text-black font-semibold py-2 px-6 rounded-full transition duration-200">

            Admin 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

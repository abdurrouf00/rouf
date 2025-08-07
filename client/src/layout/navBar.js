import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/context/cartContext';
import { Menu, X } from 'lucide-react';
import { IoPersonSharp } from "react-icons/io5";

const NavBar = () => {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔷 Top Navbar */}
      <nav className="bg-gray-200 text-black px-6 py-4 border-b-2 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-center">
          {/* Left: Logo + Cart (Mobile) */}
        <div className="flex items-center justify-between gap-4 md:hidden w-full px-4">
  {/* Left side: Logo */}
  <div className="text-xl font-bold">MySite</div>

  {/* Right side: Cart */}
  <Link to="/card" className="relative hover:text-blue-400 transition font-bold">
    🛒Cart
    {cartItems.length > 0 && (
      <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
        {cartItems.length}
      </span>
    )}
  </Link>
</div>


          {/* Center Menu for Desktop */}
          <div className="hidden md:flex gap-6 items-center text-md font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "Contact", path: "/contact" },
              { name: "About", path: "/about" },
              { name: "Cart", path: "/card", isCart: true }
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className={`relative border-b-2 border-transparent hover:border-black hover:bg-gray-200 px-2 py-1 rounded cursor-pointer transition`}
              >
                {item.name}
                {item.isCart && cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Right: Admin + Mobile Toggle */}
          <div className="flex items-end justify-end gap-4">
            <Link
              to="/login"
              className="bg-gray-200    text-black  py-2 px-6  hidden md:block"
            >
             <IoPersonSharp />
            </Link>

            {/* 🔸 Hamburger Button (Mobile Only) */}
            <button className="md:hidden cursor-pointer" onClick={() => setMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* 🔶 Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)} />
      )}

      {/* 🔷 Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/5 bg-white z-50 shadow-md transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-300">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <X size={28} />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4 text-md">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Contact", path: "/contact" },
            { name: "About", path: "/about" },
            // ✅ Cart link removed from mobile menu
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-300 py-2 px-2 rounded hover:bg-gray-200 cursor-pointer transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-gray-400 text-center py-2 rounded-full hover:bg-gray-200 cursor-pointer transition"
          >
            Admin
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

import { useEffect } from "react";


const Navbar = () => {
    useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      // লগইন না থাকলে হোমপেজে পাঠিয়ে দিচ্ছে
      window.location.href = "/";
    }
  }, []);

  
  return (
    <nav className="bg-sky-50 text-black px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="text-2xl font-bold tracking-wide">
        𝓐𝓫𝓭𝓾𝓻 𝓡𝓸𝓾𝓯
      </div>
     <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
        onClick={() => {
          localStorage.removeItem("jwtToken");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

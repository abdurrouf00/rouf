// ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Opps!
      </h1>
      {/* Error Image */}
      <img 
        src="images/404-image.jpg" 
        alt="404 Not Found" 
        className="w-72 md:w-96 mb-8"
      />
      
      {/* Error Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h1>

      {/* Back Button */}
      <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;

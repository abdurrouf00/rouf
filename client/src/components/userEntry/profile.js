import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulated API call or localStorage decode
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("User not logged in!");
      return;
    }

    // ✅ এখানে তোমার actual API call থাকবে (এখানে demo user)
    setUser({ username: "Abdur Rouf" });
  }, []);

  return (
    <div className="block pt-28 px-6  flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile Page</h1>

      {/* Error Message */}
      {error && (
        <p className="text-red-600 mb-4 text-center">{error}</p>
      )}

      {/* User Info */}
      {user && (
        <div className="mb-6 text-lg text-gray-700">
          <p><strong>Username:</strong> {user.username}</p>
        </div>
      )}

      {/* Logout Button */}
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
        onClick={() => {
          localStorage.removeItem("jwtToken");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;

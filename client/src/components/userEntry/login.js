import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Backend_Url } from "../../config/config";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
const res = await axios.post(`${Backend_Url}/api/auth/login`, {
        username,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("jwtToken", res.data.token);
        navigate("/admin"); // Login successful, admin dashboard এ নিয়ে যাবে
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-36">
      <h1 className="text-2xl font-bold mb-4 text-center">Login Page</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 block rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <hr className="w-full border-t border-gray-400" />
        <div className="flex justify-center">
          <Link
            to="/register"
            className="w-3/4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200 inline-block text-center"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

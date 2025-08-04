import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Backend_Url } from "../../config/config";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${Backend_Url}/api/auth/register`, {
        username,
        email,
        password,
      });

      if (res.data.success) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "server problem in frontend");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-36 p-6 bg-gray-100 rounded-lg shadow-md">
  <h1 className="text-3xl font-semibold mb-6 text-center">Register Page</h1>

  {error && <p className="text-red-500 mb-4">{error}</p>}

  <form onSubmit={handleRegister} className="space-y-4">
    <input
      type="text"
      placeholder="Enter username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
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
      className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
    >
      Register
    </button>
    <Link to="/login" className=" block	text-blue-600 pt-5 pb-3">
    Already have an account?

    </Link>
  </form>
</div>

  );
};

export default Register;

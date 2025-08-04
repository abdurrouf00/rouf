import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Backend_Url } from "../../config/config";

function ContactForm() {
  const [user, setUser] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${Backend_Url}/api/contact/send-message`, user);
      if (res.status === 200) {
        toast.success("✅ Thank you for your message. It has been sent.");
        setUser({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.");
    }
  };

  return (
  
      <div 
         className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center 
             bg-white p-6 md:p-10 rounded-lg shadow-lg bg-opacity-90 
             bg-no-repeat bg-cover bg-center m-4  mt-36 md:mt-36 "
        style={{ backgroundImage: "url('../images/contact-bg.jpg')" }}>
        
        {/* Left side - Overlapping Images like Vivo Phone */}
        <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
          {/* Bottom Circle Image */}
          <img
            src="../images/contact-down.jpg"
            alt="Main Circle"
            className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />

          {/* Top Overlapping Circle */}
          <img
            src="../images/contact-top.jpg"
            alt="Overlapping Circle"
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Right side - Contact Form */}
        <div className="w-full">
          <p className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-800 md:m-0 ms-28">Feel free to write</p>

          <form onSubmit={handleSubmit} className="space-y-6 md:m-0 ms-28 ">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Your Name*"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email Address*"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={user.message}
              onChange={handleChange}
              placeholder="Message About Us"
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </button>
          </form>

          <ToastContainer />
        </div>
      </div>
 
  );
}

export default ContactForm;
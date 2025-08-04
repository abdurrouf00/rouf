import React, { useEffect, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../../../config/config";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${Backend_Url}/api/contact/messages`);
        setMessages(res.data);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading messages...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Messages</h2>
      {messages.length === 0 ? (
        <p className="text-center text-gray-600">No messages found.</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="border p-4 rounded mb-4 shadow-sm">
            <p><b>Name:</b> {msg.name}</p>
            <p><b>Email:</b> {msg.email}</p>
            <p><b>Message:</b> {msg.message}</p>
            <p className="text-sm text-gray-500">
              {new Date(msg.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminMessages;

import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../navbar/navbar";
import Sidebar from "../sideBar/index";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar left fixed */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-grow ml-64">
        <Navbar />
        <main className="flex-grow p-6 pt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

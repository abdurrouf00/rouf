import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "../../components/admin/adminLayout/adminLout";
import Dashboard from "../../components/admin/dashboard/dashboard";
import Product from "../../components/admin/products/productAll";
import AddProduct from "../../components/admin/addProduct/addProduct";
import EditProduct from "../../components/admin/EditProduct/EditProduct";
import AdminMessagesList from "../../components/admin/AdminMessages/AdminMessages";
import ClientOrder from "../../components/admin/order/clientOrder"



function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>      
        <Route index element={<Dashboard />} />
        
        <Route path="product" element={<Product />} />
        <Route path="messages" element={<AdminMessagesList />} />
        <Route path="order" element={<ClientOrder />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="edit-product/:id" element={<EditProduct />} />
         
       
      </Route>
    </Routes>
  );
}

export default AdminRouter;

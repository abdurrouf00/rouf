import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../../layout/navBar";
import Footer from "../../components/footer/footer";

import Home from "../../components/home/home";
import About from "../../components/about/about";

import Contact from "../../components/contact/contact";

import Register from "../../components/userEntry/register";
import Login from "../../components/userEntry/login";
import Error from "../../components/error/error";
import ProductList from "../../components/productList/productList";
import Card from "../../components/addToCard/addCard"
import Order from "../../components/order/order"

function UserRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/products" element={<ProductList />} />
        <Route path="/card" element={<Card/>}/>
        <Route path="/order" element={<Order/>}/>


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default UserRouter;

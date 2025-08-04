import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRouter from "./routes/userLayout/userLayout";
import AdminRouter from "./routes/adminRouter/adminRouter";

import { CartProvider } from "./components/context/cartContext"; // ✅ Import the provider

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin রাউট অবশ্যই /admin/* দিতে হবে */}
          <Route path="/admin/*" element={<AdminRouter />} />

          {/* অন্য সব রাউট ইউজার রাউট */}
          <Route path="/*" element={<UserRouter />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

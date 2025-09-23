import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import MainLayout from "./components/MainLayout";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <CartProvider>
        <MainLayout>
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </MainLayout>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          toastClassName={() =>
            "bg-purple-600 text-white font-semibold rounded-xl shadow-lg"
          }
        />
      </CartProvider>
    </Router>
  );
}

export default App;

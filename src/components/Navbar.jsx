import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.svg"


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">SeduhRasa</h1>
      <ul className="flex gap-4 text-dark font-semibold ">
        <Link to="/menu " className="hover:scale-105">Menu</Link>
        <Link to="/cart" className="flex items-center gap-1 hover:scale-105"> <img src={cartIcon} alt="Cart" className=" w-6 h-6" />Cart</Link>
        <Link to="/login " className="hover:scale-105">Login</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

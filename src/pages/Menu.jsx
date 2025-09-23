import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import cartIcon from "../assets/cart.svg";

const Menu = () => {
  const { addToCart } = useCart();
  const [menus, setMenus] = useState([]);

  // fetch data dari backend
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/menus");
        const data = await res.json();
        setMenus(data);
      } catch (error) {
        console.error("Gagal fetch menus:", error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className="bg-white shadow-md rounded-2xl p-4 hover:scale-105 transition"
        >
          <img
            src={menu.image_url}
            alt={menu.name}
            className="rounded-xl h-48 w-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-dark">{menu.name}</h3>
          <p className="text-sm text-gray-600">{menu.description}</p>
          <p className="text-primary font-bold mt-2">
            Rp {new Intl.NumberFormat("id-ID").format(menu.price)}
          </p>
          <button
            onClick={() => {
              addToCart(menu);
              toast.success(`${menu.name} ditambahkan ke keranjang! 🛒`);
            }}
            className="flex mt-2 bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700  justify-between"
          >
            <img src={cartIcon} alt="cart" className="flex items-center mx-2" />
            Masukan ke keranjang
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

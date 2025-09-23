import React from "react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import trashIcon from "../assets/trash.svg";

const Cart = () => {
  const { cart, updateQty, clearCart, removeFromCart } = useCart();
  const [metode, setMetode] = useState("cash");
  const [noMeja, setNoMeja] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pembayaran via ${metode}, nomor meja: ${noMeja}`);
    clearCart();
  };

  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  if (cart.length === 0)
    return <p className="p-6 text-center">Keranjang kosong</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Pesanan Anda</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-3 border-b pb-3"
        >
          <div>
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-sm font-bold mt-1">
              Rp {new Intl.NumberFormat("id-ID").format(item.price)}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
              className="w-16 text-center border rounded px-2 py-1"
            />
            <button
              onClick={() => removeFromCart(item.id)}
              type="button"
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              {" "}
              <img src={trashIcon} alt="trash" className="w-6 h-6" />
            </button>
          </div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          Nomor Meja:
          <input
            type="text"
            value={noMeja}
            onChange={(e) => setNoMeja(e.target.value)}
            className="w-full mt-1 border px-3 py-2 rounded"
            required
          />
        </label>

        <label className="block">
          Metode Pembayaran:
          <select
            value={metode}
            onChange={(e) => setMetode(e.target.value)}
            className="w-full mt-1 border px-3 py-2 rounded"
          >
            <option value="cash">Cash</option>
            <option value="qris">QRIS</option>
            <option value="ewallet">eWallet</option>
            <option value="mbanking">mBanking</option>
          </select>
        </label>

        <p className="text-lg font-bold text-right">
          Total: Rp {new Intl.NumberFormat("id-ID").format(total)}
        </p>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={clearCart}
            className="flex items-center justify-center gap-2 w-1/2 bg-red-500 text-white py-2 rounded font-semibold hover:bg-red-600"
          >
            <img src={trashIcon} alt="trash" className="w-5 h-5" />
            <span>Hapus Semua</span>
          </button>

          <button
            type="submit"
            className="w-1/2 bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700"
          >
            Beli Sekarang
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cart;

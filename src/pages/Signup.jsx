import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Registrasi berhasil!\nNama: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-300 to-purple-400">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Daftar Akun ☕
        </h2>

        {/* teks kecil menuju login */}
        <p className="text-center text-sm mb-4">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            ayo login
          </Link>
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Nama */}
          <div>
            <label className="block text-sm font-semibold mb-1">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Masukkan nama"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Masukkan email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Buat password"
              required
            />
          </div>

          {/* Button Signup */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-xl font-semibold hover:bg-pink-600 transition"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

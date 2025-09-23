import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
      } else {
//         toast.success("Login berhasil! 🎉", {
//   position: "top-center",
//   autoClose: 3000,
//   theme: "colored",
// });
        // simpan user ke localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
      }
    } catch (err) {
      setError("Server tidak merespons");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-400 to-pink-300">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          SeduhRasa ☕
        </h2>

        {/* Teks kecil di atas button login */}
        <p className="text-center text-sm mb-4">
          Belum punya akun?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            ayo daftar
          </Link>
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder="Masukkan password"
              required
            />
          </div>

          {/* Button Login */}
          <button
            type="submit"
            onClick={() => {
              toast.success(`Yeaayyy Login Berhasil`);
            }}
            className="flex mt-2 bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 w-full justify-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from 'react'

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 to-red-500">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register</h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Konfirmasi Password"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg py-2 transition duration-300"
          >
            Daftar
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Sudah punya akun?{' '}
          <a href="#" className="text-pink-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

import React from 'react'

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-80">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition duration-300"
          >
            Masuk
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Belum punya akun? <a href="#" className="text-blue-600 hover:underline">Daftar</a>
        </p>
      </div>
    </div>
  )
}


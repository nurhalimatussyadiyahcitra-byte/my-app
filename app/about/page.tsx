import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 text-white px-6">
      <h1 className="text-4xl font-bold mb-3 animate-bounce">
        Selamat Datang
      </h1>

      {/* Bagian teks utama */}
      <div className="text-lg text-center max-w-xl mb-8 font-medium">
        <p>
          Selamat datang di proyek <span className="font-semibold">Citra Nur Halimatussyadiyah</span>
        </p>
        <p className="mt-1">Senang kamu berkunjung ke halaman ini</p>
      </div>

      {/* Card info */}
      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg w-80 text-center">
        <h2 className="text-2xl font-semibold mb-2">Tentang Proyek</h2>
        <p className="text-sm">
          Proyek ini dibuat sebagai bentuk eksplorasi dan pembelajaran dalam pengembangan aplikasi berbasis web.
        </p>
      </div>
    </div>
  )
}

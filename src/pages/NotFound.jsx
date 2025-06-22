import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-7xl mb-4">🙏🏼</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Maaf, halaman yang Anda cari tidak tersedia atau mungkin telah dipindahkan.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
};

export default NotFound;

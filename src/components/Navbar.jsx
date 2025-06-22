import React from 'react';
import { UserCircle2 } from 'lucide-react'; // pastikan sudah install lucide-react

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-3 flex justify-between items-center border-b">
      <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
        Warung Mbah Karmi
      </h1>
      
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 hidden sm:inline">Admin</span>
        <UserCircle2 className="text-gray-500" size={28} />
      </div>
    </nav>
  );
};

export default Navbar;

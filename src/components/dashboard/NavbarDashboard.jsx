import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  Utensils,
  Menu as MenuIcon,
  X as CloseIcon,
} from 'lucide-react';

const NavbarDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">MyRestaurant</h1>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="flex items-center gap-2 hover:text-yellow-400">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/menu" className="flex items-center gap-2 hover:text-yellow-400">
            <Utensils size={18} />
            <span>Menu</span>
          </Link>
          <Link to="/orders" className="flex items-center gap-2 hover:text-yellow-400">
            <ShoppingCart size={18} />
            <span>Orders</span>
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-gray-700">
          <Link to="/" className="flex items-center gap-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/menu" className="flex items-center gap-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            <Utensils size={18} />
            <span>Menu</span>
          </Link>
          <Link to="/orders" className="flex items-center gap-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            <ShoppingCart size={18} />
            <span>Orders</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarDashboard;

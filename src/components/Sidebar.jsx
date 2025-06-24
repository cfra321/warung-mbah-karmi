import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Utensils,
  ShoppingCart,
  LayoutDashboard,
  Settings,
  Menu,
  Home, 
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth >= 768) {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      {/* Bottom Navbar for Mobile (Always Show) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-gray-800 text-white flex justify-around py-3 md:hidden">
        <Link to="/" className="flex flex-col items-center text-sm hover:text-yellow-300">
          <Home size={20} />
          Home
        </Link>
        <Link to="/menu" className="flex flex-col items-center text-sm hover:text-yellow-300">
          <Utensils size={20} />
          Menu
        </Link>
        <Link to="/orders" className="flex flex-col items-center text-sm hover:text-yellow-300">
          <ShoppingCart size={20} />
          Orders
        </Link>
         <Link to="/home" className="flex flex-col items-center text-sm hover:text-yellow-300">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link to="/settings" className="flex flex-col items-center text-sm hover:text-yellow-300">
          <Settings size={20} />
          Settings
        </Link>
      </nav>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-gray-800 text-white min-h-screen p-4 top-0 left-0 transition-all duration-300
          ${collapsed ? 'w-16' : 'w-48'}`}
      >
        {/* Toggle button for Desktop */}
        <div className="mb-6">
          <button
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-white"
          >
            <Menu size={24} />
          </button>
        </div>

        <h2
          className={`text-xl font-semibold mb-6 transition-opacity duration-200 ${
            collapsed ? 'opacity-0 invisible' : 'opacity-100 visible'
          }`}
        >
          Dashboard
        </h2>

        <nav className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3 hover:text-yellow-300">
            <Home size={20} />
            {!collapsed && 'Home'}
          </Link>
          <Link to="/menu" className="flex items-center gap-3 hover:text-yellow-300">
            <Utensils size={20} />
            {!collapsed && 'Menu'}
          </Link>
          <Link to="/orders" className="flex items-center gap-3 hover:text-yellow-300">
            <ShoppingCart size={20} />
            {!collapsed && 'Orders'}
          </Link>
           <Link to="/home" className="flex items-center gap-3 hover:text-yellow-300">
            <LayoutDashboard size={20} />
            {!collapsed && 'Dashboard'}
          </Link>
          <Link to="/settings" className="flex items-center gap-3 hover:text-yellow-300">
            <Settings size={20} />
            {!collapsed && 'Settings'}
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

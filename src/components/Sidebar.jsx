import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Utensils,
  ShoppingCart,
  LayoutDashboard,
  Settings,
  X,
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed bottom-4 left-4 z-50 text-white bg-gray-800 p-2 rounded"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`bg-gray-800 text-white min-h-screen p-4 z-50 fixed md:static top-0 left-0 transition-all duration-300
          ${collapsed ? 'w-16' : 'w-48'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Toggle button (desktop only) */}
        <div className="hidden md:block mb-6">
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
            <LayoutDashboard size={20} />
            {!collapsed && 'Dashboard'}
          </Link>
          <Link to="/menu" className="flex items-center gap-3 hover:text-yellow-300">
            <Utensils size={20} />
            {!collapsed && 'Menu'}
          </Link>
          <Link to="/orders" className="flex items-center gap-3 hover:text-yellow-300">
            <ShoppingCart size={20} />
            {!collapsed && 'Orders'}
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

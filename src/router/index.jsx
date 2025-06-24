import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import MenuList from '../pages/MenuList';
import Orders from '../pages/Orders';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../index.css';
import Settings from '../pages/Settings.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-container bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Routes>
        {/* Route khusus untuk halaman depan (tanpa DashboardLayout) */}
        <Route path="/" element={<Dashboard />}/>

        {/* Semua route lain dibungkus DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="menu" element={<MenuList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="home" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;

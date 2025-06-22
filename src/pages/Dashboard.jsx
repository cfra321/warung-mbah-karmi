import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import useOrderStore from '../store/orderStore';

const groupBy = (array, keyFn) => {
  return array.reduce((result, item) => {
    const key = keyFn(item);
    if (!result[key]) result[key] = [];
    result[key].push(item);
    return result;
  }, {});
};

const sumOrderItems = (items) => {
  return items.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
};

const Dashboard = () => {
  const orders = useOrderStore((state) => state.orders);

  // Simulasikan createdAt (karena tidak ada backend, kita ambil dari ID yang merupakan timestamp)
  const ordersWithDate = orders.map((order) => ({
    ...order,
    createdAt: new Date(order.id),
  }));

  // Daily
  const dailyData = Object.entries(
    groupBy(ordersWithDate, (o) => o.createdAt.toLocaleDateString('id-ID', { weekday: 'short' }))
  ).map(([day, orders]) => ({
    day,
    total: orders.reduce((sum, o) => sum + sumOrderItems(o.items), 0),
  }));

  // Weekly
  const weeklyData = Object.entries(
    groupBy(ordersWithDate, (o) => {
      const d = o.createdAt;
      const week = Math.ceil(d.getDate() / 7);
      return `Minggu ${week}`;
    })
  ).map(([week, orders]) => ({
    week,
    total: orders.reduce((sum, o) => sum + sumOrderItems(o.items), 0),
  }));

  // Monthly
  const monthlyData = Object.entries(
    groupBy(ordersWithDate, (o) => o.createdAt.toLocaleDateString('id-ID', { month: 'short' }))
  ).map(([month, orders]) => ({
    month,
    total: orders.reduce((sum, o) => sum + sumOrderItems(o.items), 0),
  }));

  const totalPenjualan = orders.reduce((sum, o) => sum + sumOrderItems(o.items), 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Total Penjualan</h3>
        <p className="text-2xl font-bold text-green-600">
          Rp {totalPenjualan.toLocaleString()}
        </p>
      </div>

      {/* Daily */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-4">Penjualan Harian</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dailyData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="day" />
            <YAxis tickFormatter={(v) => `Rp${(v / 1000).toFixed(0)}k`} />
            <Tooltip formatter={(v) => `Rp ${v.toLocaleString()}`} />
            <Line type="monotone" dataKey="total" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-4">Penjualan Mingguan</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={weeklyData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="week" />
            <YAxis tickFormatter={(v) => `Rp${(v / 1000).toFixed(0)}k`} />
            <Tooltip formatter={(v) => `Rp ${v.toLocaleString()}`} />
            <Bar dataKey="total" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-4">Penjualan Bulanan</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `Rp${(v / 1000).toFixed(0)}k`} />
            <Tooltip formatter={(v) => `Rp ${v.toLocaleString()}`} />
            <Bar dataKey="total" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;

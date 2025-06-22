import React, { useState } from 'react';
import useMenuStore from '../store/menuStore';

const Settings = () => {
  const menuItems = useMenuStore((state) => state.menuItems);
  const addMenuItem = useMenuStore((state) => state.addMenuItem);
  const updateMenuPrice = useMenuStore((state) => state.updateMenuPrice);
  const deleteMenuItem = useMenuStore((state) => state.deleteMenuItem);

  const [newItem, setNewItem] = useState({ name: '', price: '', image: '' });

  const handleAdd = () => {
    if (!newItem.name || !newItem.price || !newItem.image) return;
    const newMenu = {
      id: Date.now(),
      name: newItem.name,
      price: parseInt(newItem.price),
      image: newItem.image,
    };
    addMenuItem(newMenu);
    setNewItem({ name: '', price: '', image: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Pengaturan Menu</h2>

      {/* Form Tambah Menu Baru */}
      <div className="bg-gray-50 p-4 rounded shadow mb-6 space-y-3 border">
        <h3 className="font-semibold text-lg">Tambah Menu Baru</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Nama"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="border px-3 py-2 rounded w-full text-gray-800"
          />
          <input
            type="number"
            placeholder="Harga"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            className="border px-3 py-2 rounded w-full text-gray-800"
          />
          <input
            type="text"
            placeholder="Link Gambar"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
            className="border px-3 py-2 rounded w-full text-gray-800"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Tambah
          </button>
        </div>
      </div>

      {/* Tabel Daftar Menu */}
      <div className="bg-white rounded shadow overflow-x-auto border">
        <table className="min-w-full text-sm text-gray-800">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4">Gambar</th>
              <th className="py-2 px-4">Nama</th>
              <th className="py-2 px-4">Harga (Rp)</th>
              <th className="py-2 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      updateMenuPrice(item.id, parseInt(e.target.value))
                    }
                    className="border px-2 py-1 w-24 rounded text-gray-800"
                  />
                </td>
                <td className="p-2">
                  <button
                    onClick={() => deleteMenuItem(item.id)}
                    className="text-red-500 hover:text-red-600 text-sm underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;

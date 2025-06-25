import React, { useState } from 'react';
import { categories, menuItems } from '../../store/menuData.constants';

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Kukus');
  const [showModal, setShowModal] = useState(false);

  const filteredMenu = menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-white text-center relative z-100   ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Menu Warung Mbah Karmi</h2>
        <p className="text-gray-500 mb-8">
          Sajian kuliner tradisional khas Jawa yang menggugah selera dan penuh cita rasa.
        </p>

        {/* Tabs Kategori */}
        <div className="flex justify-center space-x-6 border-b mb-6 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-2 border-b-2 ${
                activeCategory === cat
                  ? 'text-green-700 border-green-700 font-semibold'
                  : 'text-gray-500 border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Daftar Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredMenu.map((item, index) => (
            <div key={index} className="flex items-start justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-xs text-gray-400 mt-1">{item.calories} CAL</p>
              </div>
              <p className="text-green-700 font-semibold text-lg">Rp {item.price}.000</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => setShowModal(true)}
            className="border border-green-700 text-green-700 px-6 py-2 rounded hover:bg-green-50 transition"
          >
            Lihat semua menu
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
       <div className="fixed inset-0 bg-gray-300/50 z-100 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Semua Menu</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
              {menuItems.map((item, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.calories} CAL</p>
                  <p className="text-green-700 font-semibold mt-2">Rp {item.price}.000</p>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded mt-1 inline-block">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodMenu;

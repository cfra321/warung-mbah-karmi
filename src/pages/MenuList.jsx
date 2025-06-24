import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useOrderStore from '../store/orderStore';
import useMenuStore from '../store/menuStore';


const MenuList = () => {
  const [cart, setCart] = useState([]);
  const menuItems = useMenuStore((state) => state.menuItems);
  const addOrder = useOrderStore((state) => state.addOrder);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const handleChangeQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

const handlePayment = () => {
  Swal.fire({
    title: 'Proses Pesanan?',
    text: `Total: Rp ${totalPrice.toLocaleString()}`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Bayar Sekarang',
    cancelButtonText: 'Batal',
  }).then((result) => {
    if (result.isConfirmed) {
      addOrder(cart);// simpan ke global store
      Swal.fire('Berhasil!', 'Pesanan sedang diproses.', 'success');
      setCart([]); 
    }
  });
};

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Menu List */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-3 hover:shadow-lg transition w-full max-w-xs mx-auto"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="text-base font-semibold text-black">{item.name}</h3>
              <p className="text-gray-600 mb-2 text-sm">
                Rp {item.price.toLocaleString()}
              </p>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium py-1 px-3 rounded w-full"
              >
                + Tambah ke Keranjang
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
     <div className="w-full lg:w-1/3 bg-white text-gray-800 border border-gray-200 shadow rounded-xl p-4 h-fit mt-[5vh] pb-18 md:pb-4">
        <h3 className="text-xl font-semibold mb-4">Pesanan</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Belum ada pesanan.</p>
        ) : (
          <>
            <ul className="mb-4 space-y-2 max-h-60 overflow-auto pr-1">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-1 text-sm"
                >
                  <div className="flex-1">
                    <span className="font-medium">{item.name}</span>
                    <div className="text-xs text-gray-500">
                      Rp {item.price.toLocaleString()} x {item.quantity}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <button
                      onClick={() => handleChangeQuantity(item.id, -1)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleChangeQuantity(item.id, 1)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t pt-2 text-right font-semibold">
              Total: Rp {totalPrice.toLocaleString()}
            </div>
            <button
              onClick={handlePayment}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
            >
              Bayar Pesanan
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuList;

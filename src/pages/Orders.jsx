import useOrderStore from '../store/orderStore';

const Orders = () => {
  const orders = useOrderStore((state) => state.orders);
  const updateOrderStatus = useOrderStore((state) => state.updateOrderStatus);
  const removeItemFromOrder = useOrderStore((state) => state.removeItemFromOrder);

  const getTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Daftar Pesanan</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">Belum ada pesanan.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => {
            const total = getTotal(order.items);

            return (
              <li
                key={order.id}
                className="p-4 bg-white border rounded shadow-md space-y-4"
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-semibold text-lg">
                    Order #{order.id}
                  </h4>
                  <span
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      order.status === 'new'
                        ? 'bg-yellow-100 text-yellow-700'
                        : order.status === 'onprocess'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {order.status.toUpperCase()}
                  </span>
                </div>

                {/* Items (Nama & Qty) */}
                <ul className="text-sm text-gray-800 space-y-1">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <span>{item.name} × {item.qty}</span>
                      {order.status !== 'done' && (
                        <button
                          onClick={() => removeItemFromOrder(order.id, item.name)}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Hapus
                        </button>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Total Harga */}
                <div className="text-black text-right font-semibold mt-2">
                  Total: Rp {total.toLocaleString()}
                </div>

                {/* Tombol Aksi */}
                <div className="flex gap-3 mt-2">
                  <button
                    disabled={order.status !== 'new'}
                    onClick={() => updateOrderStatus(order.id, 'onprocess')}
                    className={`px-4 py-1 text-sm font-medium rounded ${
                      order.status === 'new'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Proses
                  </button>

                  <button
                    disabled={order.status !== 'onprocess'}
                    onClick={() => updateOrderStatus(order.id, 'done')}
                    className={`px-4 py-1 text-sm font-medium rounded ${
                      order.status === 'onprocess'
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Selesaikan
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Orders;

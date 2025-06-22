import { create } from 'zustand';

const useOrderStore = create((set) => ({
  orders: [],
  addOrder: (orderItems) =>
    set((state) => ({
      orders: [
        ...state.orders,
        {
          id: Date.now(),
          items: orderItems.map(item => ({
            ...item,
            qty: item.quantity || 1, // konversi ke `qty`
          })),
          status: 'new',
        },
      ],
    })),

  updateOrderStatus: (id, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id ? { ...order, status } : order
      ),
    })),
    
  removeItemFromOrder: (orderId, itemName) =>
    set((state) => {
        const updatedOrders = state.orders.map((order) => {
        if (order.id !== orderId) return order;
        const updatedItems = order.items.filter((item) => item.name !== itemName);
        return { ...order, items: updatedItems };
        });
        return { orders: updatedOrders };
    }),
}));

export default useOrderStore;

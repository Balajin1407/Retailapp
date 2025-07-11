
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '@/contexts/CartContext';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
}

interface OrdersContextType {
  orders: Order[];
  addOrder: (items: CartItem[], total: number) => void;
  getOrderById: (orderId: string) => Order | undefined;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};

interface OrdersProviderProps {
  children: ReactNode;
}

export const OrdersProvider: React.FC<OrdersProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const savedOrders = localStorage.getItem('orders');
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch (error) {
      console.error('Error loading orders from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('orders', JSON.stringify(orders));
    } catch (error) {
      console.error('Error saving orders to localStorage:', error);
    }
  }, [orders]);

  const addOrder = (items: CartItem[], total: number) => {
    const newOrder: Order = {
      id: `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      items,
      total,
      date: new Date().toISOString(),
      status: 'completed',
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);
  };

  const getOrderById = (orderId: string) => {
    return orders.find(order => order.id === orderId);
  };

  const value: OrdersContextType = {
    orders,
    addOrder,
    getOrderById,
  };

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
};

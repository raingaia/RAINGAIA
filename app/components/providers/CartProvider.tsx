'use client';

import { useState, useEffect } from 'react';
import { CartContext, CartItem } from '@/app/context/CartContext';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // LocalStorage'dan sepeti yükle
  useEffect(() => {
    const storedCart = localStorage.getItem('requestList');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Sepet değiştiğinde LocalStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem('requestList', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    // ... ekleme mantığı ...
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (id: number, type: string) => {
    // ... silme mantığı ...
    setCart(prev => prev.filter(item => !(item.id === id && item.type === type)));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

'use client'; // Navigasyon ve sepet state'i için client bileşeni olmalı

import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="flex justify-between p-4 bg-[#003366] text-white items-center sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="logo flex items-center">
        <span className="text-2xl font-bold tracking-wider">RAINGAIA</span>
      </Link>
      {/* Navigasyon */}
      <nav className="space-x-6 hidden md:flex">
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
        <Link href="/medications" className="hover:text-gray-300 transition">Medicines</Link>
        <Link href="/raredrugs" className="hover:text-gray-300 transition">Rare Drugs</Link>
        <Link href="/health-tourism" className="hover:text-gray-300 transition">Health Tourism</Link>
        <Link href="/request" className="hover:text-gray-300 transition">Start Request</Link>
      </nav>
      {/* Sepet Butonu */}
      <Link href="/cart" className="relative text-white hover:text-gray-300 transition">
        <i className="fa-solid fa-clipboard-list text-2xl"></i>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cart.length}
        </span>
      </Link>
    </header>
  );
};

export default Header;

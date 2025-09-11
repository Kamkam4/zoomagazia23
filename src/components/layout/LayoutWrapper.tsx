// src/components/layout/LayoutWrapper.tsx
'use client';

import { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import CartSidePanel from './CartSidePanel';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setCartOpen] = useState(false);
  // ეს საჭიროა იმისთვის, რომ თავიდან ავიცილოთ Hydration Error, რადგან localStorage სერვერზე არ არსებობს
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // ან შეგიძლია დააბრუნო Loading სპინერი
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header onCartClick={() => setCartOpen(true)} />
      <CartSidePanel isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
// src/store/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            // თუ პროდუქტი უკვე კალათაშია, უბრალოდ გაზარდე რაოდენობა
            const updatedItems = state.items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { items: updatedItems };
          } else {
            // თუ პროდუქტი ახალია, დაამატე რაოდენობით 1
            return { items: [...state.items, { ...product, quantity: 1 }] };
          }
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, newQuantity) =>
        set((state) => {
          if (newQuantity <= 0) {
            // თუ რაოდენობა 0-ია ან ნაკლები, წაშალე პროდუქტი
            return { items: state.items.filter((item) => item.id !== productId) };
          }
          const updatedItems = state.items.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          );
          return { items: updatedItems };
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'petshop-cart-storage', // სახელი local storage-ში შესანახად
    }
  )
);
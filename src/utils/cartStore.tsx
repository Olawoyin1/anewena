// import { create } from 'zustand';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// interface CartState {
//   cart: CartItem[];
//   isOpen: boolean;
//   toggleCart: () => void;
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
//   subtotal: () => number;
// }

// export const useCartStore = create<CartState>((set, get) => ({
//   cart: [],
//   isOpen: false,
//   toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
//   addToCart: (item) => {
//     const cart = get().cart;
//     const exists = cart.find((i) => i.id === item.id);
//     if (exists) {
//       set({
//         cart: cart.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
//         ),
//       });
//     } else {
//       set({ cart: [...cart, item] });
//     }
//   },
//   removeFromCart: (id) =>
//     set({ cart: get().cart.filter((item) => item.id !== id) }),
//   clearCart: () => set({ cart: [] }),
//   subtotal: () =>
//     get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
// }));


import { create } from "zustand";
import { CartItem } from "../Types/ProductsTypes";

type CartState = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  toggleCart: () => void;
  isCartOpen: boolean;
};

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  isCartOpen: false,
  addToCart: (item) =>
    set((state) => {
      const existing = state.cartItems.find((p) => p.id === item.id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((p) =>
            p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));



// import { create } from "zustand";
// import { CartItem } from "../Types/ProductsTypes";

// type CartState = {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   toggleCart: () => void;
//   isCartOpen: boolean;
// };

// export const useCartStore = create<CartState>((set) => ({
//   cartItems: [],
//   isCartOpen: false,
//   addToCart: (item) =>
//     set((state) => {
//       const existing = state.cartItems.find((p) => p.id === item.id);
//       if (existing) {
//         return {
//           cartItems: state.cartItems.map((p) =>
//             p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
//           ),
//         };
//       }
//       return { cartItems: [...state.cartItems, item] };
//     }),
//   toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
// }));


import { create } from "zustand";
import { CartItem } from "../Types/ProductsTypes";

type CartState = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: CartItem) => void;
  toggleCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
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

  increaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
    })),

  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
}));

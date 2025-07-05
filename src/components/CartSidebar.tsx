import { useCartStore } from "../utils/cartStore";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart, removeItem } = useCartStore();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/10 bg-opacity-50 z-[998]"
            onClick={toggleCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[80%] sm:w-[340px] bg-white border-l border-gray-700 z-[999] flex flex-col"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            transition={{ type: "tween", duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-end items-center p-4">
              <button onClick={toggleCart}>
                <VscClose size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-4 flex flex-col gap-6 overflow-y-auto max-h-[65vh] scrollbar-thin">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-center relative group"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition text-gray-500 hover:text-red-600"
                    >
                      <HiOutlineX size={18} />
                    </button>

                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex flex-col gap-[2px]">
                      <span className="text-sm font-semibold">{item.name}</span>
                      <span className="text-sm uppercase text-gray-500">
                        {item.brand}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.quantity} × ${item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Subtotal & Actions */}
            <div className="p-4 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="uppercase text-sm font-bold">Subtotal:</span>
                <span className="uppercase text-lg font-semibold">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/cart"
                  className="block w-full uppercase text-sm text-center border border-gray-700 bg-white py-3 hover:bg-black hover:text-white font-semibold"
                  onClick={toggleCart}
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  className="block w-full uppercase text-sm text-center font-semibold bg-black text-white py-3 hover:bg-[#C69657]"
                  onClick={toggleCart}
                >
                  Checkout
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;

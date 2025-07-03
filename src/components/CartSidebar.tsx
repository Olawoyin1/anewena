import { useCartStore } from "../utils/cartStore";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart } = useCartStore();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isCartOpen) return null; // Only render when open

  return (
    <>
      {/* Backdrop - clicking here closes the cart */}
      <div
        className="fixed inset-0 bg-black/10 bg-opacity-50 z-[998]"
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div
        className="fixed top-0 right-0 h-full w-[80%] sm:w-[340px] bg-white border-l border-gray-700 z-[999] flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the sidebar
      >
        {/* Header */}
        <div className="flex justify-end items-center p-4 ">
          <button onClick={toggleCart} className="cursor-pointer">
            <VscClose size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex flex-col gap-6 overflow-y-auto max-h-[65vh]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-20 h-20 object-cover "
                />
                <div className="flex gap-1 flex-col">
                  <span className="text-sm font-semibold">{item.name}</span>
                  <span className="text-sm font-semibold uppercase">{item.brand}</span>
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
            <span className="uppercase text-lg font-semibold">${subtotal.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">

          <Link
            to="/cart"
            className="block w-full uppercase text-sm text-center border border-gray-700 bg-white py-3  hover:bg-black hover:text-white  font-semibold"
            onClick={toggleCart}
          >
            View Cart
          </Link>
          <Link
            to="/checkout"
            className="block w-full uppercase text-sm text-center font-semibold bg-black text-white py-3  hover:bg-[#C69657] "
            onClick={toggleCart}
          >
            Checkout
          </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;

import { useCartStore } from "../utils/cartStore";
import { HiOutlineX } from "react-icons/hi";
import { HiChevronDown, HiChevronUp, HiOutlineMinus } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useCartStore();
  const [showCoupon, setShowCoupon] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <h1 className="text-center border-b border-gray-300 p-4 font-bold text-[24px] leading-[33px] tracking-[-0.36px] uppercase m-0">
        Cart
      </h1>

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center text-gray-600">
          <div className="flex flex-col items-center justify-center gap-7">
            <button className="relative">
              <IoCartOutline size={100} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-[6px] py-[2px] rounded-full">
                0
              </span>
            </button>
            <p className="text-sm font-medium mt-2">
              Your cart is currently empty
            </p>
            <Link
              to="/shop"
              className="bg-black uppercase text-white px-14 font-semibold cursor-pointer py-3 text-sm hover:bg-[#C69657]"
            >
              Return to Shop
            </Link>
          </div>
        </div>
      ) : (
        // If cart has items
        <div className="max-w-lg md:max-w-6xl mx-auto px-4 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2">
            {/* Column Headers */}
            <div className="grid md:grid-cols-12 grid-cols-2 justify-between gap-4 pt-7 lg:pt-0 px-3 md:px-0 pb-2 text-xs font-semibold uppercase text-gray-500 mb-4">
              <div className="md:col-span-8">Product</div>
              <div className="col-span-2 hidden lg:flex text-center">
                Quantity
              </div>
              <div className="md:col-span-2 text-end md:text-center">Subtotal</div>
            </div>

            {/* Cart Items List */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-4 border-b border-gray-300 pb-4 group"
                >
                  {/* Product Info (always visible) */}
                  <div className="md:col-span-8 flex items-center gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold">{item.name}</span>
                      <span className="text-sm font-semibold uppercase">
                        {item.brand}
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.quantity} × ${item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Subtotal on lg+ screens */}
                  <div className="hidden lg:flex lg:col-span-2 justify-center">
                    <div className="flex items-center border border-gray-400 gap-4 font-medium">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 cursor-pointer hover:text-[#C69657] py-3"
                      >
                        <HiOutlineMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 cursor-pointer hover:text-[#C69657] py-3"
                      >
                        <GoPlus />
                      </button>
                    </div>
                  </div>

                  <div className="hidden lg:flex md:col-span-2 justify-center font-semibold text-lg">
                    ${(item.price * item.quantity).toLocaleString()}
                  </div>

                  {/* Quantity + Subtotal + Remove on mobile */}
                  <div className="lg:hidden  col-span-full flex flex-row items-center justify-between px-2 gap-4">
                    {/* Left: Quantity with Remove Button */}
                    <div className="flex items-center gap-4">
                      {/* Remove Button (always visible on mobile) */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <HiOutlineX size={18} />
                      </button>

                      {/* Quantity Control */}
                      <div className="flex items-center border border-gray-400 gap-4 font-medium">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-3 cursor-pointer hover:text-[#C69657] py-2"
                        >
                          <HiOutlineMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-3 cursor-pointer hover:text-[#C69657] py-2"
                        >
                          <GoPlus />
                        </button>
                      </div>
                    </div>

                    {/* Right: Subtotal */}
                    <div className="text-base font-semibold">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Checkout Summary */}
          <div className="md:border-l lg:border border-gray-300 md:p-6 md:py-0 py-7 h-fit sticky top-28 self-start">
            {/* Coupon Toggle */}
            <div>
              <button
                onClick={() => setShowCoupon(!showCoupon)}
                className="flex text-sm uppercase justify-between items-center w-full font-bold mb-4"
              >
                <span>Coupon Code</span>
                {showCoupon ? <HiChevronUp /> : <HiChevronDown />}
              </button>

              {/* Coupon Form */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showCoupon ? "max-h-40 my-2 mb-4" : "max-h-0"
                }`}
              >
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter coupon"
                    className="flex-1 px-3 py-2 border border-gray-300 text-sm"
                  />
                  <button className="px-8 py-2 text-sm border cursor-pointer border-gray-300 uppercase hover:bg-gray-800 hover:text-white">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="uppercase text-sm">
              <div className="py-4 flex border-t border-gray-300 font-semibold justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="py-4 flex border-t border-gray-300 justify-between items-center font-semibold">
                <span>Total</span>
                <span className="text-xl">${subtotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="bg-black uppercase text-white px-14 font-semibold cursor-pointer py-4 text-xs hover:bg-[#C69657] w-full">
              Checkout
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CartPage;

import { useCartStore } from "../utils/cartStore";
import { HiOutlineX } from "react-icons/hi";
import { HiChevronDown, HiChevronUp, HiOutlineMinus } from "react-icons/hi2";

import { IoCartOutline} from "react-icons/io5";
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

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Cart Items */}
        <div className="col-span-full">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center text-gray-600 py-10">
              {/* Cart Icon with 0 badge */}
              <div className=" flex flex-col items-center justify-center gap-7">

                   <button  className="relative">
            <IoCartOutline size={100} />
            
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-[6px] py-[2px] rounded-full">
                0
              </span>
          
          </button>


                {/* Empty Cart Message */}
                <p className="text-sm font-medium mt-2">
                  Your cart is currently empty
                </p>

                {/* Return to Shop Button */}
                <Link
                  to="/shop"
                  className="bg-black uppercase  text-white px-14 font-semibold cursor-pointer py-3 text-sm hover:bg-[#C69657] w-full"
                >
                  Return to Shop
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Column Headers */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-2 text-xs font-semibold uppercase text-gray-500 mb-4">
                <div className="col-span-8">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Subtotal</div>
              </div>

              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-4 border-b border-gray-300 pb-4 group"
                  >
                    {/* Product Info */}
                    <div className="md:col-span-8 flex items-center gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                        <button
                          onClick={() => removeItem(item.id)}
                          className="absolute top-1 right-1 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
                        >
                          <HiOutlineX size={18} />
                        </button>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">
                          {item.name}
                        </span>
                        <span className="text-sm font-semibold uppercase">
                          {item.brand}
                        </span>
                        <span className="text-xs text-gray-500">
                          {item.quantity} × ${item.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-2 flex justify-center">
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

                    {/* Subtotal */}
                    <div className="md:col-span-2 flex justify-center font-semibold text-lg">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: Summary Panel */}
        {cartItems.length > 0 && (
          <div className="border border-gray-300 p-6 h-fit sticky top-28 self-start">
            {/* Coupon Toggle */}
            <div>
              <button
                onClick={() => setShowCoupon(!showCoupon)}
                className="flex text-sm uppercase justify-between items-center w-full font-bold mb-4"
              >
                <span>Coupon Code</span>
                {showCoupon ? <HiChevronUp /> : <HiChevronDown />}
              </button>

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

            {/* Subtotal and Total */}
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
        )}
      </div>

      <Footer />
    </>
  );
};

export default CartPage;

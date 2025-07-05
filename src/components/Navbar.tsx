

import { useState } from "react";
import { PiTiktokLogoThin } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { IoCartOutline, IoLogoInstagram } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../utils/cartStore";

const HeaderBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartCount = useCartStore((state) =>
    state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="px-4 md:px-10 py-5 flex items-center justify-between">

        {/* Logo (Desktop) */}
        <div className="hidden md:flex">
          <Link to="/shop">
            <h3 className="tracking-[8px] text-2xl font-extrabold">ANEWWENA</h3>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <RxHamburgerMenu
            onClick={() => setMobileMenuOpen(true)}
            size={28}
            className="text-gray-700"
          />
        </div>

        {/* Center Logo (Mobile) */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
          <Link to="/shop">
            <h3 className="tracking-[4px] text-xl font-extrabold">ANEWWENA</h3>
          </Link>
        </div>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-gray-600 text-2xl relative">
          <Link to="/"><PiTiktokLogoThin /></Link>
          <Link to="/"><IoLogoInstagram /></Link>
          <Link to="/login"><LuUserRound /></Link>

          {/* Cart Icon with Badge */}
          <button onClick={toggleCart} className="relative cursor-pointer">
            <IoCartOutline  />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-[6px] py-[2px] rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Cart Icon with Badge */}
        <div className="md:hidden relative">
          <button onClick={toggleCart} aria-label="Cart" className="text-4xl relative">
            <IoCartOutline />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-[6px] py-[2px] rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-50 flex flex-col"
    >
      {/* Close Button */}
      <div className="flex justify-end p-6">
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-xl font-bold"
        >
          ✕
        </button>
      </div>

      {/* Nav Links with full-width borders */}
      <nav className="flex flex-col w-full">
        {[
          "Home",
          "About Us",
          "FAQ",
          "Shipping",
          "Partner With Us",
        ].map((label, idx, arr) => (
          <a
            key={label}
            href="#"
            className={`w-full px-6 py-4 uppercase font-semibold text-lg ${
              idx !== arr.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Info section above footer icons */}
      <div className="px-6 py-4 uppercase flex flex-col gap-2 text-sm text-gray-800 border-t border-gray-200">
         <li className="text-[12px] font-semibold uppercase tracking-wide hover:opacity-70 transition">PHONE : +1 712-339-9294</li>
        <li className="text-[12px] font-semibold uppercase tracking-wide hover:opacity-70 transition">EMAIL : INFO@IDEAISCAPITAL.COM</li>
        <p>Contact: support@anewwena.com</p>
        <p className="">© 2025 Anewwena. All rights reserved.</p>
      </div>

      {/* Fixed bottom icons (evenly spaced) */}
      <div className="fixed bottom-0 left-0 w-full bg-white  border-gray-300 px-6 py-4">
        <div className="flex justify-between text-2xl text-gray-700">
         <Link to="/"><PiTiktokLogoThin /></Link>
          <Link to="/"><IoLogoInstagram /></Link>
          <Link to="/login"><LuUserRound /></Link>
          <button onClick={toggleCart} className="relative cursor-pointer">
            <IoCartOutline  />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-[6px] py-[2px] rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </header>
  );
};

export default HeaderBar;

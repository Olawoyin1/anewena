

import { useState } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { PiTiktokLogoThin } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { IoCartOutline, IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
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
            className="fixed inset-0 bg-white z-50 flex flex-col p-6"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg text-gray-800">
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>

            <div className="mt-auto pt-6 flex justify-center gap-4 text-xl text-gray-600">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><RiInstagramFill /></a>
              <a href="#"><IoLogoWhatsapp /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderBar;

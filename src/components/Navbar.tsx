import { useState } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { PiTiktokLogoThin } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io5";

const HeaderBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="px-4 md:px-10 py-5 flex items-center justify-between">

        {/* Desktop: Logo Left */}
        <div className="hidden md:flex">
          <Link to="/shop">
            <h3 className="tracking-[8px] text-2xl font-extrabold">ANEWWENA</h3>
          </Link>
        </div>

        {/* Mobile: Menu Icon */}
        <div className="md:hidden">
          <RxHamburgerMenu
            onClick={() => setMobileMenuOpen(true)}
            size={28}
            className="text-gray-700"
          />
        </div>

        {/* Mobile: Center Logo */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
          <Link to="/shop">
            <h3 className="tracking-[4px] text-xl font-extrabold">ANEWWENA</h3>
          </Link>
        </div>

        {/* Desktop: Icons Right */}
        <div className="hidden md:flex items-center gap-4 text-gray-600 text-xl">
          <a href="#"><PiTiktokLogoThin /></a>
          <a href="#"><IoLogoInstagram /></a>
          <a href="#"><LuUserRound /></a>
          <a href="#"><IoCartOutline /></a>
        </div>

        {/* Mobile: Cart Icon Right */}
        <div className="md:hidden">
          <Link to="/cart" aria-label="Cart" className="text-2xl">
            <IoCartOutline />
          </Link>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-6"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Mobile Nav Items */}
            <nav className="flex flex-col gap-6 text-lg text-gray-800">
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>

            {/* Social Icons Bottom */}
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

import  { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white s sticky border-b top-0 z-50">
      <div className="container mx-auto px-4 py-4  flex items-center justify-between">
        {/* Mobile: Menu Icon */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black text-xl"
          >
            <FiMenu />
          </button>
        </div>

        {/* Desktop: Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-gray-600 text-sm">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><RiInstagramFill /></a>
          <a href="#" aria-label="Whatsapp"><IoLogoWhatsapp /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>

        {/* Logo (Center) */}
        <div className="flex-1 flex justify-center">
            <Link to="/shop">
                <h3 className="tracking-[8px] font-extrabold">ANEWENA</h3>
            </Link>
        </div>

        {/* Icons Right (Desktop: All, Mobile: One icon) */}
        <div className="flex items-center gap-4 text-black">
          <a href="/cart" aria-label="Cart" className="text-lg">
            <GoSearch />
          </a>
          <a href="/cart" aria-label="Cart" className="text-lg">
            <IoIosHeartEmpty />
          </a>
          <a href="/cart" aria-label="Cart" className="text-lg">
            <IoCartOutline />
          </a>
          <div className="hidden md:flex items-center gap-4">
            <a href="/my-account" aria-label="Account" className="text-lg">
              <LuUserRound />
            </a>
          </div>
        </div>
      </div>

      {/* Optional: Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex justify-center p-4 text-gray-600 text-sm gap-4">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><RiInstagramFill /></a>
            <a href="#" aria-label="Whatsapp"><IoLogoWhatsapp /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderBar;

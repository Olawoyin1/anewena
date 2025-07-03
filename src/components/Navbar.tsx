import  { useState } from "react";
// import { FiMenu } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white s sticky border-b border-gray-600 top-0 z-50">
      <div className="mx-auto px-4 md:px-10 py-5  flex items-center justify-between">
        {/* Mobile: Menu Icon */}
        <div className="flex items-center gap-4 md:hidden">
          
            <RxHamburgerMenu onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} size={30}/>
          
        </div>

        {/* Desktop: Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-gray-600 text-sm">
          <a href="#" aria-label="Facebook"><FaFacebookF  /></a>
          <a href="#" aria-label="Instagram"><RiInstagramFill  /></a>
          <a href="#" aria-label="Whatsapp"><IoLogoWhatsapp  /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>

        {/* Logo (Center) */}
        <div className="flex justify-center">
            <Link to="/shop">
                <h3  className="tracking-[8px] text-2xl font-extrabold">ANEWENA</h3>
            </Link>
        </div>

        {/* Icons Right (Desktop: All, Mobile: One icon) */}
        <div className="flex items-center gap-4 text-black">
          <div className="hidden md:flex items-center gap-4">
           <a href="/my-account" aria-label="Account" className="text-xl">
              <LuUserRound />
            </a>
          <a href="/cart" aria-label="Cart" className="text-xl">
            <GoSearch />
          </a>
          <a href="/cart" aria-label="Cart" className="text-xl">
            <IoIosHeartEmpty />
          </a>
          </div>
          
            <a href="/cart" aria-label="Cart" className="text-3xl md:text-xl">
            <IoCartOutline  />
          </a>
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

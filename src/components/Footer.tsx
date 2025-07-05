import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
const links = [
  { href: "/about", label: "About us" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping", label: "Shipping" },
  { href: "/partner", label: "Partner with us" },
  // { href: "/returns", label: "Returns" },
  // { href: "/privacy-policy", label: "Privacy Policy" },
  // { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <div className="w-full  bg-black text-white border-t border-gray-900 py-[65px] ">
    <section className="w-full py-2 md:py-[20px] px-4 md:px-[70px] flex flex-wrap md:flex-nowrap">
      {/* Left */}
      <div className="w-full md:w-1/3 pr-0 md:pr-[50px] ">
        <h2 className="text-[15px] font-semibold uppercase leading-[20px] tracking-wide ">
          Subscribe to our newsleter
        </h2>
        <form className="flex mt-3 flex-col">
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email *"
            className="w-full border border-gray-300 px-4 py-2 text-sm outline-none"
            />
          <button
            type="submit"
            className="mt-4 w-fit inline-block border border-gray-300  font-semibold uppercase text-xs px-6 py-3 tracking-wide hover:bg-gray-100 hover:text-black cursor-pointer transition"
            >
            Subscribe
          </button>
        </form>
      </div>

      {/* Center (Form) */}
      <div className="w-full md:w-1/3 px-0 md:px-[50px] mt-8 md:mt-0">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[12px] font-semibold uppercase tracking-wide  hover:opacity-70 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right (Links) */}
      <div className="w-full md:w-1/3 pl-0 md:pl-[50px] space-y-3 mt-8 md:mt-0">
        <li className="text-[12px] font-semibold uppercase tracking-wide hover:opacity-70 transition">PHONE : +1 712-339-9294</li>
        <li className="text-[12px] font-semibold uppercase tracking-wide hover:opacity-70 transition">EMAIL : INFO@IDEAISCAPITAL.COM</li>
      </div>





    </section>
    <footer className="w-full px-10 md:pt-10 justify-center md:px-[70px] flex flex-wrap-reverse items-center md:flex-nowrap">
      {/* Logo */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-2 md:mb-0">
        <img
          src="https://firebrick-manatee-316512.hostingersite.com/wp-content/uploads/2023/04/ricky-2152262473.png"
          alt="Logo"
          className="max-w-[325px] h-auto"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/3 px-0 md:px-[50px] my-8 md:my-0 ">
        <p className="text-[12px] text-center md:text-start tracking-wide">
          © 2023 Moderno Theme. All Rights Reserved.
        </p>
      </div>

      {/* Socials */}
      <div className="w-full md:w-1/3 pl-0 md:pl-[50px] flex justify-center md:justify-start mt-8 md:mt-0">
        <a href="#" aria-label="Facebook" className="hover:text-black border p-3 border-gray-400 transition">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-black border p-3 border-gray-400 transition">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-black border p-3 border-gray-400 transition">
          <FaXTwitter />
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-black border p-3 border-gray-400 transition">
          <FaYoutube />
        </a>
      </div>
    </footer>
    </div>
  );
}

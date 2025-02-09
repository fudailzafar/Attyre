import React, { useEffect, useState } from "react";
import "../App.css";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px32 bg-transparent">
      <Menu
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden w-7 cursor-pointer"
          
        />
        <h1 className="cookie text-4xl text-[#F63D68] cursor-pointer mr-48 md:mr-0">
          attyre
        </h1>
        <ul className="hidden md:flex gap-7 text-black font-semibold inter">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Explore
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            Color Analysis
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Curations
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Find the Fit
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Marketplace
          </a>
        </ul>

        
      </div>
      {/* ---- mobile menu ---- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-start p-6 cursor-pointer">
          <X
            onClick={() => setShowMobileMenu(false)}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-semibold inter">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block "
          >
            Explore
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            Color Analysis
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Curations
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Find the Fit
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Marketplace
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

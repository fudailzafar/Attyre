import React, { useEffect, useState } from "react";
import "../App.css";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
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
        <h1 className="cookie text-4xl text-[#F63D68] cursor-pointer hover:text-gray-400 mr-32 md:mr-0">
          <Link to="/">attyre</Link>
        </h1>
        <ul className="hidden md:flex gap-7 text-black font-semibold inter">
          <Link to="/" className="cursor-pointer hover:text-gray-400">
            Explore
          </Link>
          <Link to="/color" className="cursor-pointer hover:text-gray-400">
            Color Analysis
          </Link>
          <Link to="/curations" className="cursor-pointer hover:text-gray-400">
            Curations
          </Link>
          <Link to="/findthefit" className="cursor-pointer hover:text-gray-400">
            Find the Fit
          </Link>
          <Link
            to="/marketplace"
            className="cursor-pointer hover:text-gray-400"
          >
            Marketplace
          </Link>
        </ul>
      </div>
      {/* ---- mobile menu ---- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all z-50`}
      >
        <div className="flex justify-start p-6 cursor-pointer">
          <X onClick={() => setShowMobileMenu(false)} className="w-6" alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-semibold inter">
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/"
            className="px-4 py-2 rounded-full inline-block "
          >
            Explore
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/color"
            className="px-4 py-2 rounded-full inline-block"
          >
            Color Analysis
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/curations"
            className="px-4 py-2 rounded-full inline-block"
          >
            Curations
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/findthefit"
            className="px-4 py-2 rounded-full inline-block"
          >
            Find the Fit
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/marketplace"
            className="px-4 py-2 rounded-full inline-block"
          >
            Marketplace
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

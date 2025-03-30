import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">NeurAlign</span>
            </RouterLink>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <RouterLink to="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </RouterLink>
            <a href="/#product" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Product
            </a>
            <a href="/#features" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Features
            </a>
            <a href="/#team" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Team
            </a>
            <a href="/#contact" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
              Request Demo
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg absolute w-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium" onClick={toggleMenu}>
            Home
          </a>
          <a href="/#product" className="block text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium" onClick={toggleMenu}>
            Product
          </a>
          <a href="/#features" className="block text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium" onClick={toggleMenu}>
            Features
          </a>
          <a href="/#team" className="block text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium" onClick={toggleMenu}>
            Team
          </a>
          <a href="/#contact" className="block gradient-bg text-white px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

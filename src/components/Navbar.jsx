import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Plus } from 'lucide-react';
import logo from '../assets/img/logo.png';
import { categories } from '../data/productData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // For mobile accordion
  const [isDesktopProductsOpen, setIsDesktopProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCategorySlug = (category) => category.toLowerCase().replace(/\s+/g, '-');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-navy-900 tracking-tight">
              <img src={logo} alt="K Tapes India" className="h-20 w-auto" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</a>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDesktopProductsOpen(true)}
              onMouseLeave={() => setIsDesktopProductsOpen(false)}
            >
              <a href="#products" className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center gap-1">
                Products <ChevronDown size={16} />
              </a>
              
              {/* Dropdown Menu */}
              {isDesktopProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100 animate-fade-in-up">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#products-${getCategorySlug(category)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#applications" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Applications</a>
            <a href="#why-us" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Why Us</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</a>
            
            <a href="#contact" className="btn-primary py-2 px-5 text-sm">
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 flex flex-col">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-orange-600 border-b border-gray-50">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-orange-600 border-b border-gray-50">About</a>
            
            {/* Mobile Products Accordion */}
            <div className="border-b border-gray-50">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-800 hover:text-orange-600"
              >
                Products
                {isProductsOpen ? <ChevronDown size={20} /> : <Plus size={20} />}
              </button>
              
              {isProductsOpen && (
                <div className="bg-orange-50/50 pl-6 pr-3 py-2 space-y-1 rounded-sm">
                  <a 
                    href="#products" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="block py-2 text-sm text-gray-700 hover:text-orange-600 font-medium"
                  >
                    View All Products
                  </a>
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#products-${getCategorySlug(category)}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:text-orange-600 border-t border-orange-100/50 flex justify-between items-center"
                    >
                      {category}
                      <Plus size={16} />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#applications" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-orange-600 border-b border-gray-50">Applications</a>
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-orange-600 border-b border-gray-50">Why Us</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-orange-600">Contact</a>
            
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-6 bg-orange-600 text-white font-semibold py-3 rounded-md"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

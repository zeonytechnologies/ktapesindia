import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-navy-900 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight mb-4">
              <img src={logo} alt="K Tapes India" className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Industrial Adhesive Tape Solutions designed for consistent and reliable performance across multiple industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Applications', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 bg-navy-800 p-6 rounded-xl border border-gray-700/50">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
              
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300 text-sm mb-1">Bengaluru, Karnataka</p>
                  <a href="https://maps.app.goo.gl/ULVbwLGHvrW2JGEWA" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-xs hover:underline">
                    View on Map
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300 text-sm mb-1">074835 52250</p>
                  <a href="tel:+917483552250" className="text-orange-500 text-xs hover:underline block mb-1">
                    Call Now
                  </a>
                  <a href="https://wa.me/917483552250" target="_blank" rel="noopener noreferrer" className="text-green-500 text-xs hover:underline block">
                    WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors block text-center shadow-lg">
                  Get a Quote
                </a>
              </div>

            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} K Tapes India. All rights reserved.
          </p>
          <div className="text-gray-600 text-xs">
            Industrial Adhesive Solutions
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

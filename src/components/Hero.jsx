import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import heroImage from '../assets/img/image.png';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 md:order-1 flex flex-col justify-center animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm tracking-wide mb-6 w-max">
              INDUSTRIAL ADHESIVE SOLUTIONS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-tight mb-6">
              Industrial Adhesive Tapes <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                Built for Reliable Performance
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              K Tapes India provides high-quality self-adhesive tapes for packaging, mounting, sealing and diverse industrial applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#products" className="btn-primary">
                Explore Products <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-outline-dark">
                Get a Quote
              </a>
            </div>
            
            <p className="text-sm text-gray-500 font-medium flex items-center">
              <span className="w-8 h-px bg-gray-300 mr-3"></span>
              Serving businesses with reliable adhesive solutions.
            </p>
          </div>
          
          {/* Right Content - Image */}
          <div className="order-1 md:order-2 relative animate-fade-in-up animation-delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent z-10"></div>
              <img 
                src={heroImage} 
                alt="Industrial Adhesive Tapes Manufacturing" 
                className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Quick Contact</p>
                  <a href="tel:+917483552250" className="text-lg font-bold text-navy-900 hover:text-orange-600">
                    074835 52250
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

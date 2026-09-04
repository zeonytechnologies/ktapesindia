import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/img/image copy 4.png';

const About = () => {
  const features = [
    "Quality-focused products",
    "Wide range of adhesive tapes",
    "Solutions for industrial applications",
    "Customer-focused service"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Reliable Adhesive Solutions for Every Application
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-100 transform translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
            <img 
              src={aboutImg} 
              alt="Industrial Tape Manufacturing" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            
            {/* Floating stat card */}
            <div className="absolute -left-6 bottom-12 bg-white p-6 rounded-xl shadow-2xl hidden md:block">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-navy-900 text-lg">Industrial</p>
                  <p className="text-sm text-gray-500">Applications</p>
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-lg">Bulk</p>
                  <p className="text-sm text-gray-500">Supply</p>
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-lg">Quality</p>
                  <p className="text-sm text-gray-500">Focused</p>
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-lg">Customer</p>
                  <p className="text-sm text-gray-500">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              Trusted Supplier & Manufacturer
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              K Tapes India is a trusted supplier and manufacturer of self-adhesive tape solutions, offering products designed for packaging, mounting, sealing and industrial requirements.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-orange-500 mr-4 flex-shrink-0" size={24} />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="btn-primary">
              Discuss Your Requirement
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

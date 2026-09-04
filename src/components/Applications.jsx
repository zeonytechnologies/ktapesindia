import React from 'react';
import { applications } from '../data/productData';
import { Box, Factory, Maximize, HardHat, Car, Home, Presentation, Wrench } from 'lucide-react';

const getIcon = (id) => {
  switch(id) {
    case 1: return <Box size={32} />;
    case 2: return <Factory size={32} />;
    case 3: return <Maximize size={32} />;
    case 4: return <HardHat size={32} />;
    case 5: return <Car size={32} />;
    case 6: return <Home size={32} />;
    case 7: return <Presentation size={32} />;
    case 8: return <Wrench size={32} />;
    default: return <Box size={32} />;
  }
};

const Applications = () => {
  return (
    <section id="applications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Built for Multiple Applications
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {applications.map((app) => (
            <div 
              key={app.id} 
              className="bg-gray-50 border border-gray-100 p-6 rounded-xl text-center group hover:bg-navy-900 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            >
              <div className="bg-white p-4 rounded-full text-orange-500 mb-4 shadow-sm group-hover:scale-110 group-hover:bg-navy-800 transition-all duration-300">
                {getIcon(app.id)}
              </div>
              <h3 className="font-bold text-navy-900 mb-2 group-hover:text-white transition-colors">
                {app.name}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                {app.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Applications;

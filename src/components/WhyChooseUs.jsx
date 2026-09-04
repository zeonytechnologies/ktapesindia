import React from 'react';
import { Award, Layers, Box, Settings } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <Award size={36} />,
      title: "High Quality",
      desc: "Reliable adhesive products designed for consistent performance."
    },
    {
      id: 2,
      icon: <Layers size={36} />,
      title: "Wide Product Range",
      desc: "Solutions for packaging, mounting, sealing and industrial requirements."
    },
    {
      id: 3,
      icon: <Box size={36} />,
      title: "Bulk Supply",
      desc: "Suitable for businesses with regular and large-volume requirements."
    },
    {
      id: 4,
      icon: <Settings size={36} />,
      title: "Customized Solutions",
      desc: "Solutions based on specific application and business requirements."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-900/5 transform skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Why Choose K Tapes India?
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-orange-500"
            >
              <div className="text-orange-500 mb-6 bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

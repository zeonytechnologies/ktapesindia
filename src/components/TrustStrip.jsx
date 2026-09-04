import React from 'react';
import { ShieldCheck, Package, Layers, Truck, Headset } from 'lucide-react';

const TrustStrip = () => {
  const trustItems = [
    { icon: <ShieldCheck size={28} />, text: "Quality Products" },
    { icon: <Layers size={28} />, text: "Wide Product Range" },
    { icon: <Package size={28} />, text: "Bulk Supply" },
    { icon: <Truck size={28} />, text: "Customized Solutions" },
    { icon: <Headset size={28} />, text: "Reliable Service" },
  ];

  return (
    <section className="bg-navy-900 py-8 relative z-20 -mt-10 mx-4 sm:mx-8 md:mx-auto max-w-7xl rounded-xl shadow-xl">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:justify-between">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center text-white space-x-3 group cursor-default">
              <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="font-semibold text-sm md:text-base tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

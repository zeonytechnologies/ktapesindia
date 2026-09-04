import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, onEnquire }) => {
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      {/* Image Area */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
          {product.shortDescription}
        </p>
        
        {/* Bottom CTA */}
        <button 
          onClick={() => onEnquire(product)}
          className="flex items-center justify-between w-full text-navy-900 font-semibold group/btn pt-4 border-t border-gray-100"
        >
          <span>Request Quote</span>
          <ArrowRight size={20} className="text-orange-500 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

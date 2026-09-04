import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background imagery/texture */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop" 
          alt="Industrial Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Looking for the Right Adhesive Tape?
        </h2>
        
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Tell us your requirement and our team will help you find the right tape solution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Request a Quote <ArrowRight size={20} />
          </a>
          <a 
            href="https://wa.me/917483552250" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary border-green-500 text-white hover:bg-green-500 hover:text-white hover:border-green-500"
          >
            WhatsApp Us <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

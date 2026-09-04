import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917483552250"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Tooltip */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
        Chat with us
        {/* Tooltip arrow */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;

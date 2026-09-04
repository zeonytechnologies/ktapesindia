import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const GoogleMap = () => {
  const mapUrl = "https://maps.app.goo.gl/ULVbwLGHvrW2JGEWA";

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden relative group">
          
          {/* Map Visual Placeholder */}
          <div className="relative h-64 md:h-80 bg-gray-200 w-full overflow-hidden flex items-center justify-center">
            {/* We use an image to simulate map background */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
              alt="Map Background" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px] transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Center Pin & Card */}
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl flex flex-col items-center max-w-sm text-center transform transition-transform group-hover:-translate-y-2">
              <div className="bg-orange-100 p-4 rounded-full text-orange-600 mb-4 shadow-inner">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">K TAPES INDIA</h3>
              <p className="text-sm text-gray-500 mb-6">Bengaluru, Karnataka</p>
              
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full shadow-md"
              >
                Get Directions <ExternalLink size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoogleMap;

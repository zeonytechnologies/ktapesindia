import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset form on open
      setIsSuccess(false);
      setFormData(prev => ({ ...prev, message: `I am interested in ${product?.name}.` }));
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, product: product?.name }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        alert(data.error || 'Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error sending enquiry:', error);
      alert('Network error. Please try again later or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(`Hello K Tapes India, I am interested in ${product.name}. I would like to know the price and availability.`);
  const whatsappUrl = `https://wa.me/917483552250?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto flex flex-col md:flex-row animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full backdrop-blur-md transition-colors"
        >
          <X size={24} />
        </button>

        {/* Product Details (Left) */}
        <div className="w-full md:w-2/5 bg-gray-50 p-6 md:p-8 flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
          <div className="rounded-xl overflow-hidden mb-6 shadow-md h-48 md:h-64">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
            {product.category}
          </span>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {product.description}
          </p>
          
          <div className="mt-auto">
            <h4 className="font-semibold text-navy-900 mb-3 text-sm">Applications:</h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span key={idx} className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-full shadow-sm">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Enquiry Form (Right) */}
        <div className="w-full md:w-3/5 p-6 md:p-8 bg-white">
          <h3 className="text-xl font-bold text-navy-900 mb-2">Request a Quote</h3>
          <p className="text-gray-500 text-sm mb-6">Fill out the form below or message us on WhatsApp for a quick response.</p>
          
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-64 flex flex-col items-center justify-center">
              <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
                <CheckCircle size={40} />
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-2">Enquiry Sent Successfully!</h4>
              <p className="text-green-700 text-sm">
                Thank you for your interest in {product.name}. Our team will contact you shortly.
              </p>
              <button 
                onClick={onClose}
                className="mt-6 text-navy-900 font-semibold hover:text-orange-600 transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Required Quantity</label>
                <input 
                  type="text" 
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="E.g., 500 Rolls, 10 Cartons"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirement</label>
                <textarea 
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`flex-1 btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'} <Send size={18} />
                </button>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Chat on WhatsApp <MessageCircle size={18} />
                </a>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductModal;

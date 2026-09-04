import React, { useState } from 'react';
import { MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({name:'', company:'', phone:'', email:'', product:'', quantity:'', message:''});
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

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Let's Talk About Your Requirement
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Details */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-navy-900 mb-8 tracking-tight">K TAPES INDIA</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 flex-shrink-0 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      1st Floor, 15, HKK Ln,<br />
                      Near Paan Beeda Shop,<br />
                      S.P Road Cross, Kumbarpet,<br />
                      Dodpete, Nagarathpete,<br />
                      Bengaluru, Karnataka 560002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 flex-shrink-0 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Phone / WhatsApp</h4>
                    <p className="text-gray-600 text-lg">074835 52250</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a href="tel:+917483552250" className="btn-dark text-center">
                  Call Now
                </a>
                <a 
                  href="https://wa.me/917483552250" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-dark text-center border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Request Quote Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Request Quote</h3>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center flex flex-col items-center justify-center h-[400px]">
                  <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Enquiry Submitted!</h4>
                  <p className="text-green-700 text-sm">
                    Thank you for contacting K Tapes India. We will get back to you with a quotation shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-navy-900 font-semibold hover:text-orange-600 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                      <input type="text" name="product" value={formData.product} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="e.g. VHB Tape" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                      <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'} <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

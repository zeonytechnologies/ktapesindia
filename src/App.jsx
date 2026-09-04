import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import ProductSection from './components/ProductSection';
import Applications from './components/Applications';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import GoogleMap from './components/GoogleMap';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <ProductSection />
        <Applications />
        <WhyChooseUs />
        <CTASection />
        <ContactSection />
        <GoogleMap />
        <ReviewsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

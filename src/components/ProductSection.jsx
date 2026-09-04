import React, { useState, useEffect } from 'react';
import { products, categories } from '../data/productData';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle URL hash for category linking from navbar
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#products-')) {
        const categorySlug = hash.replace('#products-', '');
        const matchedCategory = categories.find(c => c.toLowerCase().replace(/\s+/g, '-') === categorySlug);
        if (matchedCategory) {
          setSelectedCategory(matchedCategory);
        }
      }
    };
    
    // Initial check
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleEnquire = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // wait for animation
  };

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Adhesive Tape Solutions
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore reliable tape solutions designed for packaging, mounting, sealing and industrial applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "All" 
                ? "bg-orange-600 text-white shadow-md" 
                : "bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category 
                  ? "bg-orange-600 text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onEnquire={handleEnquire} 
            />
          ))}
        </div>

      </div>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default ProductSection;

import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      text: "Super service and good product with heavy stock available",
      author: "Verified Customer",
      rating: 5
    },
    {
      id: 2,
      text: "Totally fine best services...",
      author: "Verified Customer",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-xl text-navy-900">5.0</span>
              <span className="text-gray-500 text-sm">(5 Google Reviews)</span>
            </div>
          </div>
          
          <a 
            href="https://maps.app.goo.gl/ULVbwLGHvrW2JGEWA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-600 font-semibold hover:text-orange-700 transition-colors mt-6 md:mt-0"
          >
            View Google Reviews →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">{review.author}</h4>
                  <span className="text-xs text-gray-500">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;

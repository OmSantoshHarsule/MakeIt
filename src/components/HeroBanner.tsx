import React from 'react';
import { Link } from 'react-router-dom';
const HeroBanner = () => {
  return <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="Fresh groceries" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Fresh Groceries Delivered to Your Door
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Shop for fresh produce, dairy, meat, and everyday essentials with fast
          and reliable home delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/products" className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition duration-300">
            Shop Now
          </Link>
          <Link to="#how-it-works" className="bg-transparent border-2 border-white hover:bg-white/20 px-6 py-3 rounded-full font-medium transition duration-300">
            How It Works
          </Link>
        </div>
      </div>
    </div>;
};
export default HeroBanner;
import React from 'react';
import { Link } from 'react-router-dom';
const PromotionBanner = () => {
  return <div className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              Free Delivery on Your First Order
            </h3>
            <p>Use code FRESHSTART at checkout for orders over $50</p>
          </div>
          <Link to="/products" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition duration-300">
            Shop Now
          </Link>
        </div>
      </div>
    </div>;
};
export default PromotionBanner;
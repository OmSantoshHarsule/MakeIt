import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/products';
const CategoriesSection = () => {
  return <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Shop by Category</h2>
          <Link to="/products" className="flex items-center text-green-600 hover:text-green-700 transition duration-300">
            All Categories
            <ChevronRightIcon size={20} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.slice(0, 8).map(category => <CategoryCard key={category.id} id={category.id} name={category.name} image={category.image} />)}
        </div>
      </div>
    </div>;
};
export default CategoriesSection;
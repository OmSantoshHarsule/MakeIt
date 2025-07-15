import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../context/CartContext';
interface FeaturedProductsProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}
const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  products,
  viewAllLink = '/products'
}) => {
  return <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <Link to={viewAllLink} className="flex items-center text-green-600 hover:text-green-700 transition duration-300">
            View All
            <ChevronRightIcon size={20} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>;
};
export default FeaturedProducts;
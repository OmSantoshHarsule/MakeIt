import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, StarIcon, PlusIcon } from 'lucide-react';
import { Product, useCart } from '../context/CartContext';
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const {
    addToCart
  } = useCart();
  return <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/products/${product.id}`}>
        <div className="h-48 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/products/${product.id}`} className="block">
            <h3 className="font-medium text-lg text-gray-800 hover:text-green-600 transition duration-300">
              {product.name}
            </h3>
          </Link>
          <span className="text-green-600 font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">per {product.unit}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <StarIcon size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600">
            {product.reviews} reviews
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          <button onClick={() => addToCart(product, 1)} disabled={!product.inStock} className={`flex items-center justify-center rounded-full w-10 h-10 ${product.inStock ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 cursor-not-allowed text-gray-500'} transition duration-300`} aria-label="Add to cart">
            <PlusIcon size={18} />
          </button>
        </div>
      </div>
    </div>;
};
export default ProductCard;
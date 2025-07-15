import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon, MinusIcon, PlusIcon, TruckIcon, ShieldIcon, HeartIcon, ChevronRightIcon } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
const ProductDetailPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const product = products.find(p => p.id === id);
  const {
    addToCart
  } = useCart();
  const [quantity, setQuantity] = useState(1);
  // Get related products
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/products" className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-full font-medium transition duration-300">
          Browse Products
        </Link>
      </div>;
  }
  return <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-green-600 transition duration-300">
            Home
          </Link>
          <ChevronRightIcon size={16} className="mx-2" />
          <Link to="/products" className="hover:text-green-600 transition duration-300">
            Products
          </Link>
          <ChevronRightIcon size={16} className="mx-2" />
          <span className="text-gray-800">{product.name}</span>
        </nav>
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain object-center p-4" style={{
            maxHeight: '500px'
          }} />
          </div>
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-500 ml-2">per {product.unit}</span>
            </div>
            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            {/* Stock Status */}
            <div className="mb-6">
              <span className={`${product.inStock ? 'text-green-600' : 'text-red-500'} font-medium`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 text-gray-600 hover:text-green-600 transition duration-300" aria-label="Decrease quantity">
                  <MinusIcon size={16} />
                </button>
                <span className="px-3 py-1 border-l border-r border-gray-300">
                  {quantity}
                </span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-gray-600 hover:text-green-600 transition duration-300" aria-label="Increase quantity">
                  <PlusIcon size={16} />
                </button>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={() => addToCart(product, quantity)} disabled={!product.inStock} className={`flex-1 py-3 px-6 rounded-full font-medium flex items-center justify-center ${product.inStock ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} transition duration-300`}>
                Add to Cart
              </button>
              <button className="flex items-center justify-center py-3 px-6 border border-gray-300 rounded-full text-gray-700 hover:border-green-600 hover:text-green-600 transition duration-300">
                <HeartIcon size={18} className="mr-2" />
                Add to Wishlist
              </button>
            </div>
            {/* Delivery Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start mb-3">
                <TruckIcon size={20} className="text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Free Delivery</h3>
                  <p className="text-sm text-gray-600">
                    For orders over $50. Delivery within 24 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldIcon size={20} className="text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">
                    Quality Guarantee
                  </h3>
                  <p className="text-sm text-gray-600">
                    If you're not satisfied, we offer a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetailPage;
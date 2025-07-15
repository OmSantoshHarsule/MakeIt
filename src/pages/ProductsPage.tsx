import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDownIcon, FilterIcon, XIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Product } from '../context/CartContext';
const ProductsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const searchParam = queryParams.get('search');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20]);
  const [sortBy, setSortBy] = useState('featured');
  // Filter products based on URL parameters and other filters
  useEffect(() => {
    let result = [...products];
    // Apply category filter
    if (categoryParam) {
      result = result.filter(product => product.category === categoryParam);
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory(null);
    }
    // Apply search filter
    if (searchParam) {
      const searchLower = searchParam.toLowerCase();
      result = result.filter(product => product.name.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower));
    }
    // Apply price filter
    result = result.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' - no specific sorting
        break;
    }
    setFilteredProducts(result);
  }, [categoryParam, searchParam, priceRange, sortBy]);
  // Get page title based on filters
  const getPageTitle = () => {
    if (searchParam) {
      return `Search results for "${searchParam}"`;
    }
    if (activeCategory) {
      const category = categories.find(cat => cat.id === activeCategory);
      return category ? category.name : 'All Products';
    }
    return 'All Products';
  };
  return <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{getPageTitle()}</h1>
          {/* Mobile filter button */}
          <button onClick={() => setFilterOpen(!filterOpen)} className="md:hidden flex items-center bg-white px-4 py-2 rounded border border-gray-300">
            <FilterIcon size={18} className="mr-2" />
            Filters
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar filters - desktop */}
          <div className="hidden md:block w-64 bg-white p-4 rounded-lg shadow">
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setActiveCategory(null)} className={`w-full text-left ${!activeCategory ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                    All Products
                  </button>
                </li>
                {categories.map(category => <li key={category.id}>
                    <button onClick={() => setActiveCategory(category.id)} className={`w-full text-left ${activeCategory === category.id ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                      {category.name}
                    </button>
                  </li>)}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-3">Price Range</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">
                  ${priceRange[0].toFixed(2)}
                </span>
                <span className="text-gray-600">
                  ${priceRange[1].toFixed(2)}
                </span>
              </div>
              <input type="range" min="0" max="20" step="1" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseFloat(e.target.value)])} className="w-full" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-3">Sort By</h3>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="w-full p-2 border border-gray-300 rounded">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
          {/* Mobile filters - slide in */}
          {filterOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <div className="bg-white w-4/5 h-full overflow-auto p-4">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <XIcon size={24} />
                  </button>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-3">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button onClick={() => {
                    setActiveCategory(null);
                    setFilterOpen(false);
                  }} className={`w-full text-left ${!activeCategory ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                        All Products
                      </button>
                    </li>
                    {categories.map(category => <li key={category.id}>
                        <button onClick={() => {
                    setActiveCategory(category.id);
                    setFilterOpen(false);
                  }} className={`w-full text-left ${activeCategory === category.id ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                          {category.name}
                        </button>
                      </li>)}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-3">Price Range</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">
                      ${priceRange[0].toFixed(2)}
                    </span>
                    <span className="text-gray-600">
                      ${priceRange[1].toFixed(2)}
                    </span>
                  </div>
                  <input type="range" min="0" max="20" step="1" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseFloat(e.target.value)])} className="w-full" />
                </div>
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-3">Sort By</h3>
                  <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="w-full p-2 border border-gray-300 rounded">
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
                <button onClick={() => setFilterOpen(false)} className="w-full bg-green-600 text-white py-2 rounded font-medium">
                  Apply Filters
                </button>
              </div>
            </div>}
          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown - mobile and desktop */}
            <div className="flex justify-end mb-4">
              <div className="relative">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8">
                  <option value="featured">Sort: Featured</option>
                  <option value="price-asc">Sort: Price Low to High</option>
                  <option value="price-desc">Sort: Price High to Low</option>
                  <option value="rating">Sort: Customer Rating</option>
                </select>
                <ChevronDownIcon size={16} className="absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
            {filteredProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
              </div> : <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search term
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default ProductsPage;
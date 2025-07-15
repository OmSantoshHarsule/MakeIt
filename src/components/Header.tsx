import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, SearchIcon, MenuIcon, XIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';
const Header = () => {
  const {
    cartItems
  } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const categories = [{
    name: 'Groceries',
    path: '/products?category=groceries'
  }, {
    name: 'Fruits & Vegetables',
    path: '/products?category=produce'
  }, {
    name: 'Dairy',
    path: '/products?category=dairy'
  }, {
    name: 'Meat',
    path: '/products?category=meat'
  }, {
    name: 'Household',
    path: '/products?category=household'
  }, {
    name: 'Personal Care',
    path: '/products?category=personal-care'
  }, {
    name: 'Beverages',
    path: '/products?category=beverages'
  }, {
    name: 'Snacks',
    path: '/products?category=snacks'
  }];
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-600">FreshMart</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.slice(0, 5).map(category => <Link key={category.name} to={category.path} className="text-gray-600 hover:text-green-600 transition duration-300">
                {category.name}
              </Link>)}
            <div className="relative group">
              <button className="text-gray-600 hover:text-green-600 transition duration-300">
                More
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 right-0 mt-1 w-48 z-50">
                {categories.slice(5).map(category => <Link key={category.name} to={category.path} className="block py-2 text-gray-600 hover:text-green-600 transition duration-300">
                    {category.name}
                  </Link>)}
              </div>
            </div>
          </nav>
          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-600 hover:text-green-600 transition duration-300">
              <SearchIcon size={20} />
            </button>
            <Link to="/account" className="text-gray-600 hover:text-green-600 transition duration-300">
              <UserIcon size={20} />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-green-600 transition duration-300 relative">
              <ShoppingCartIcon size={20} />
              {cartItems.length > 0 && <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>}
            </Link>
            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600 hover:text-green-600 transition duration-300">
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Search Bar */}
        {searchOpen && <div className="py-4 border-t border-gray-100">
            <SearchBar />
          </div>}
        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              {categories.map(category => <Link key={category.name} to={category.path} className="text-gray-600 hover:text-green-600 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
                  {category.name}
                </Link>)}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;
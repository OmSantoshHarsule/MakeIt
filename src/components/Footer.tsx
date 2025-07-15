import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FreshMart</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop shop for fresh groceries and everyday essentials
              delivered right to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition duration-300">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-300 hover:text-white transition duration-300">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition duration-300">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
                  Offers & Deals
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=produce" className="text-gray-300 hover:text-white transition duration-300">
                  Fruits & Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products?category=dairy" className="text-gray-300 hover:text-white transition duration-300">
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=meat" className="text-gray-300 hover:text-white transition duration-300">
                  Meat & Seafood
                </Link>
              </li>
              <li>
                <Link to="/products?category=bakery" className="text-gray-300 hover:text-white transition duration-300">
                  Bakery
                </Link>
              </li>
              <li>
                <Link to="/products?category=beverages" className="text-gray-300 hover:text-white transition duration-300">
                  Beverages
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Grocery Lane, Fresh City, FC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon size={20} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon size={20} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">support@freshmart.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} FreshMart. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link to="#" className="hover:text-white transition duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition duration-300">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition duration-300">
              Delivery Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
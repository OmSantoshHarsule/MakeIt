import React from 'react';
import { Product } from '../context/CartContext';
export const products: Product[] = [{
  id: '1',
  name: 'Organic Bananas',
  price: 1.99,
  image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'produce',
  description: 'Sweet and nutritious organic bananas. Perfect for snacking, smoothies, or baking.',
  unit: 'bunch',
  rating: 4.5,
  reviews: 128,
  inStock: true
}, {
  id: '2',
  name: 'Fresh Avocados',
  price: 2.49,
  image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'produce',
  description: 'Ripe and ready to eat. Rich in healthy fats and perfect for guacamole or toast.',
  unit: 'each',
  rating: 4.8,
  reviews: 95,
  inStock: true
}, {
  id: '3',
  name: 'Whole Milk',
  price: 3.29,
  image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'dairy',
  description: 'Farm-fresh whole milk. Rich and creamy with essential nutrients.',
  unit: '1 gallon',
  rating: 4.6,
  reviews: 87,
  inStock: true
}, {
  id: '4',
  name: 'Organic Eggs',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'dairy',
  description: 'Free-range, organic eggs from pasture-raised hens. No antibiotics or hormones.',
  unit: 'dozen',
  rating: 4.9,
  reviews: 132,
  inStock: true
}, {
  id: '5',
  name: 'Chicken Breast',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'meat',
  description: 'Boneless, skinless chicken breast. Lean protein source, perfect for grilling or baking.',
  unit: '1 lb',
  rating: 4.7,
  reviews: 75,
  inStock: true
}, {
  id: '6',
  name: 'Laundry Detergent',
  price: 12.99,
  image: 'https://images.unsplash.com/photo-1585236847501-22537a2424f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'household',
  description: 'High-efficiency laundry detergent. Removes tough stains while being gentle on fabrics.',
  unit: '100 oz',
  rating: 4.4,
  reviews: 63,
  inStock: true
}, {
  id: '7',
  name: 'Sparkling Water',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1572114686643-5a3dd4864b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'beverages',
  description: 'Refreshing sparkling water with natural flavors. Zero calories and sugar-free.',
  unit: '12-pack',
  rating: 4.3,
  reviews: 42,
  inStock: true
}, {
  id: '8',
  name: 'Potato Chips',
  price: 3.49,
  image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'snacks',
  description: 'Crispy, crunchy potato chips made with real potatoes and sea salt.',
  unit: '8 oz bag',
  rating: 4.2,
  reviews: 56,
  inStock: true
}, {
  id: '9',
  name: 'Hand Soap',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'personal-care',
  description: 'Moisturizing hand soap with aloe vera. Gentle on skin with a refreshing scent.',
  unit: '12 oz',
  rating: 4.6,
  reviews: 38,
  inStock: true
}, {
  id: '10',
  name: 'White Bread',
  price: 2.49,
  image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'groceries',
  description: 'Soft and fluffy white bread. Perfect for sandwiches and toast.',
  unit: 'loaf',
  rating: 4.1,
  reviews: 45,
  inStock: true
}, {
  id: '11',
  name: 'Fresh Strawberries',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'produce',
  description: 'Sweet and juicy strawberries. Locally grown and freshly picked.',
  unit: '1 lb',
  rating: 4.7,
  reviews: 89,
  inStock: true
}, {
  id: '12',
  name: 'Greek Yogurt',
  price: 5.49,
  image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'dairy',
  description: 'Creamy Greek yogurt. High in protein and perfect for breakfast or snacking.',
  unit: '32 oz',
  rating: 4.8,
  reviews: 76,
  inStock: true
}];
export const categories = [{
  id: 'produce',
  name: 'Fruits & Vegetables',
  image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'dairy',
  name: 'Dairy & Eggs',
  image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'meat',
  name: 'Meat & Seafood',
  image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'bakery',
  name: 'Bakery',
  image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'groceries',
  name: 'Pantry Items',
  image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'beverages',
  name: 'Beverages',
  image: 'https://images.unsplash.com/photo-1596803244535-925769f389fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'snacks',
  name: 'Snacks',
  image: 'https://images.unsplash.com/photo-1599629954294-14df9f8291ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'household',
  name: 'Household Items',
  image: 'https://images.unsplash.com/photo-1583947581924-860bda3c5381?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'personal-care',
  name: 'Personal Care',
  image: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}];
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import PromotionBanner from '../components/PromotionBanner';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import { products } from '../data/products';
const HomePage = () => {
  // Get featured products (could be based on ratings, popularity, etc.)
  const featuredProducts = products.slice(0, 4);
  // Get new arrivals
  const newArrivals = products.slice(4, 8);
  // Get special offers
  const specialOffers = products.slice(8, 12);
  return <div>
      <HeroBanner />
      <CategoriesSection />
      <FeaturedProducts title="Featured Products" products={featuredProducts} />
      <PromotionBanner />
      <FeaturedProducts title="New Arrivals" products={newArrivals} />
      <HowItWorks />
      <FeaturedProducts title="Special Offers" products={specialOffers} />
      <Testimonials />
    </div>;
};
export default HomePage;
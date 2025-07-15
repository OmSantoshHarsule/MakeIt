import React from 'react';
import { StarIcon } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    name: 'Sarah Johnson',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
    text: 'FreshMart has completely changed how I shop for groceries. The produce is always fresh, and delivery is consistently on time. I love the wide selection and competitive prices!'
  }, {
    name: 'Michael Chen',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    rating: 4,
    text: "As a busy professional, FreshMart saves me so much time. The website is easy to navigate, and their customer service is excellent. I've recommended it to all my colleagues."
  }, {
    name: 'Emily Rodriguez',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    text: "The quality of meat and produce is outstanding! I appreciate the attention to detail in selecting items. It's like having a personal shopper who knows exactly what I want."
  }];
  return <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers
            have to say about their FreshMart experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-medium text-gray-800">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Testimonials;
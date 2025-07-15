import React from 'react';
import { ShoppingCartIcon, TruckIcon, HomeIcon, CheckCircleIcon } from 'lucide-react';
const HowItWorks = () => {
  const steps = [{
    icon: <ShoppingCartIcon size={32} className="text-green-500" />,
    title: 'Browse & Shop',
    description: 'Browse our wide selection of fresh groceries and add items to your cart.'
  }, {
    icon: <CheckCircleIcon size={32} className="text-green-500" />,
    title: 'Place Your Order',
    description: 'Review your cart, select delivery time, and complete your purchase.'
  }, {
    icon: <TruckIcon size={32} className="text-green-500" />,
    title: 'We Prepare & Deliver',
    description: 'Our team carefully selects your items and prepares them for delivery.'
  }, {
    icon: <HomeIcon size={32} className="text-green-500" />,
    title: 'Receive at Your Door',
    description: 'Your groceries arrive fresh at your doorstep at the chosen time.'
  }];
  return <div id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your groceries delivered is easy with our simple 4-step
            process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
};
export default HowItWorks;
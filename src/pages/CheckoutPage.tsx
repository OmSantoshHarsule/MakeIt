import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCardIcon, TruckIcon, ChevronRightIcon, CheckCircleIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
const CheckoutPage = () => {
  const {
    cartItems,
    cartTotal,
    clearCart
  } = useCart();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const deliveryFee = cartTotal >= 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08; // 8% tax rate
  const orderTotal = cartTotal + deliveryFee + tax;
  // Form states
  const [deliveryDetails, setDeliveryDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    deliveryInstructions: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };
  const handlePlaceOrder = () => {
    // In a real app, we would process the order here
    setOrderPlaced(true);
    clearCart();
  };
  if (orderPlaced) {
    return <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircleIcon size={64} className="text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. We've received your order and will begin
              processing it right away. You will receive an email confirmation
              shortly.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-800 font-medium">
                Order Number: #FGM23987654
              </p>
            </div>
            <Link to="/" className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-full font-medium transition duration-300">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>;
  }
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
        {cartItems.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Steps */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                <div className={`flex items-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <span className="ml-2 font-medium">Delivery</span>
                </div>
                <div className={`w-12 h-1 mx-2 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                  <span className="ml-2 font-medium">Payment</span>
                </div>
                <div className={`w-12 h-1 mx-2 ${step >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    3
                  </div>
                  <span className="ml-2 font-medium">Review</span>
                </div>
              </div>
              {/* Step 1: Delivery Information */}
              {step === 1 && <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <TruckIcon size={24} className="text-green-600 mr-2" />
                    <h2 className="text-lg font-bold text-gray-800">
                      Delivery Information
                    </h2>
                  </div>
                  <form onSubmit={handleDeliverySubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="firstName">
                          First Name
                        </label>
                        <input type="text" id="firstName" value={deliveryDetails.firstName} onChange={e => setDeliveryDetails({
                    ...deliveryDetails,
                    firstName: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="lastName">
                          Last Name
                        </label>
                        <input type="text" id="lastName" value={deliveryDetails.lastName} onChange={e => setDeliveryDetails({
                    ...deliveryDetails,
                    lastName: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">
                          Email
                        </label>
                        <input type="email" id="email" value={deliveryDetails.email} onChange={e => setDeliveryDetails({
                    ...deliveryDetails,
                    email: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="phone">
                          Phone Number
                        </label>
                        <input type="tel" id="phone" value={deliveryDetails.phone} onChange={e => setDeliveryDetails({
                    ...deliveryDetails,
                    phone: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1" htmlFor="address">
                        Address
                      </label>
                      <input type="text" id="address" value={deliveryDetails.address} onChange={e => setDeliveryDetails({
                  ...deliveryDetails,
                  address: e.target.value
                })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="city">
                          City
                        </label>
                        <input type="text" id="city" value={deliveryDetails.city} onChange={e => setDeliveryDetails({
                    ...deliveryDetails,
                    city: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="state">
                          State
                        </label>
                        <input type="text" id="state" value={deliveryDetails.state} onChange={e => setDeliveryDetails({
                    ...deliveryDetails,
                    state: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="zipCode">
                          Zip Code
                        </label>
                        <input type="text" id="zipCode" value={deliveryDetails.zipCode} onChange={e => setDeliveryDetails({
                    ...deliveryDetails,
                    zipCode: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1" htmlFor="deliveryInstructions">
                        Delivery Instructions (Optional)
                      </label>
                      <textarea id="deliveryInstructions" value={deliveryDetails.deliveryInstructions} onChange={e => setDeliveryDetails({
                  ...deliveryDetails,
                  deliveryInstructions: e.target.value
                })} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" rows={3}></textarea>
                    </div>
                    <div className="flex justify-between mt-6">
                      <Link to="/cart" className="text-green-600 hover:text-green-700 transition duration-300 flex items-center">
                        <ChevronRightIcon size={16} className="transform rotate-180 mr-1" />
                        Back to Cart
                      </Link>
                      <button type="submit" className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-full font-medium transition duration-300">
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>}
              {/* Step 2: Payment Method */}
              {step === 2 && <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-6">
                    <CreditCardIcon size={24} className="text-green-600 mr-2" />
                    <h2 className="text-lg font-bold text-gray-800">
                      Payment Method
                    </h2>
                  </div>
                  <form onSubmit={handlePaymentSubmit}>
                    <div className="mb-6">
                      <div className="flex flex-col space-y-4">
                        <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:border-green-500 transition duration-300">
                          <input type="radio" name="paymentMethod" value="credit-card" checked={paymentMethod === 'credit-card'} onChange={() => setPaymentMethod('credit-card')} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                          <span className="ml-2 flex-1">
                            Credit or Debit Card
                          </span>
                          <div className="flex space-x-2">
                            <div className="w-10 h-6 bg-blue-600 rounded"></div>
                            <div className="w-10 h-6 bg-red-500 rounded"></div>
                            <div className="w-10 h-6 bg-gray-800 rounded"></div>
                          </div>
                        </label>
                        <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:border-green-500 transition duration-300">
                          <input type="radio" name="paymentMethod" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                          <span className="ml-2 flex-1">PayPal</span>
                          <div className="w-16 h-6 bg-blue-700 rounded"></div>
                        </label>
                        <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:border-green-500 transition duration-300">
                          <input type="radio" name="paymentMethod" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                          <span className="ml-2">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>
                    {paymentMethod === 'credit-card' && <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-1" htmlFor="cardNumber">
                            Card Number
                          </label>
                          <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 mb-1" htmlFor="expiryDate">
                              Expiry Date
                            </label>
                            <input type="text" id="expiryDate" placeholder="MM/YY" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-1" htmlFor="cvv">
                              CVV
                            </label>
                            <input type="text" id="cvv" placeholder="123" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-1" htmlFor="nameOnCard">
                            Name on Card
                          </label>
                          <input type="text" id="nameOnCard" placeholder="John Doe" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                        </div>
                      </div>}
                    <div className="flex justify-between mt-6">
                      <button type="button" onClick={() => setStep(1)} className="text-green-600 hover:text-green-700 transition duration-300 flex items-center">
                        <ChevronRightIcon size={16} className="transform rotate-180 mr-1" />
                        Back
                      </button>
                      <button type="submit" className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-full font-medium transition duration-300">
                        Review Order
                      </button>
                    </div>
                  </form>
                </div>}
              {/* Step 3: Order Review */}
              {step === 3 && <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">
                    Review Your Order
                  </h2>
                  {/* Delivery Information */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Delivery Information
                    </h3>
                    <div className="bg-gray-50 p-4 rounded">
                      <p>
                        {deliveryDetails.firstName} {deliveryDetails.lastName}
                        <br />
                        {deliveryDetails.address}
                        <br />
                        {deliveryDetails.city}, {deliveryDetails.state}{' '}
                        {deliveryDetails.zipCode}
                        <br />
                        {deliveryDetails.phone}
                        <br />
                        {deliveryDetails.email}
                      </p>
                      {deliveryDetails.deliveryInstructions && <div className="mt-2">
                          <p className="font-medium">Delivery Instructions:</p>
                          <p>{deliveryDetails.deliveryInstructions}</p>
                        </div>}
                    </div>
                  </div>
                  {/* Payment Method */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Payment Method
                    </h3>
                    <div className="bg-gray-50 p-4 rounded">
                      {paymentMethod === 'credit-card' && <p>Credit/Debit Card</p>}
                      {paymentMethod === 'paypal' && <p>PayPal</p>}
                      {paymentMethod === 'cod' && <p>Cash on Delivery</p>}
                    </div>
                  </div>
                  {/* Order Items */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Order Items
                    </h3>
                    <div className="bg-gray-50 p-4 rounded">
                      <ul className="divide-y divide-gray-200">
                        {cartItems.map(item => <li key={item.product.id} className="py-2 flex justify-between">
                            <div>
                              <span className="font-medium">
                                {item.product.name}
                              </span>
                              <span className="text-gray-600 text-sm ml-2">
                                x{item.quantity}
                              </span>
                            </div>
                            <span>
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <button onClick={() => setStep(2)} className="text-green-600 hover:text-green-700 transition duration-300 flex items-center">
                      <ChevronRightIcon size={16} className="transform rotate-180 mr-1" />
                      Back
                    </button>
                    <button onClick={handlePlaceOrder} className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-full font-medium transition duration-300">
                      Place Order
                    </button>
                  </div>
                </div>}
            </div>
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    {deliveryFee === 0 ? <span className="text-green-600">Free</span> : <span className="font-medium">
                        ${deliveryFee.toFixed(2)}
                      </span>}
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-gray-800">
                      <span>Order Total</span>
                      <span>${orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded">
                      <TruckIcon size={16} className="text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">
                        {deliveryFee === 0 ? 'Your order qualifies for free delivery!' : `Delivery fee: $${deliveryFee.toFixed(2)}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              You need to add items to your cart before checking out.
            </p>
            <Link to="/products" className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-full font-medium transition duration-300">
              Browse Products
            </Link>
          </div>}
      </div>
    </div>;
};
export default CheckoutPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, TrashIcon, PlusIcon, MinusIcon, ChevronRightIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart();
  const deliveryFee = cartTotal >= 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08; // 8% tax rate
  const orderTotal = cartTotal + deliveryFee + tax;
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Your Shopping Cart
        </h1>
        {cartItems.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Cart Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-gray-600 font-medium">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                {/* Cart Items */}
                {cartItems.map(item => <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-200 items-center">
                    {/* Product Info */}
                    <div className="md:col-span-6 flex items-center">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-4">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">
                          <Link to={`/products/${item.product.id}`} className="hover:text-green-600 transition duration-300">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500">
                          per {item.product.unit}
                        </p>
                        <button onClick={() => removeFromCart(item.product.id)} className="mt-1 text-sm text-red-500 flex items-center hover:text-red-600 transition duration-300">
                          <TrashIcon size={14} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    {/* Price */}
                    <div className="md:col-span-2 text-center">
                      <span className="md:hidden text-gray-600 mr-2">
                        Price:
                      </span>
                      <span className="font-medium">
                        ${item.product.price.toFixed(2)}
                      </span>
                    </div>
                    {/* Quantity */}
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2 py-1 text-gray-600 hover:text-green-600 transition duration-300" aria-label="Decrease quantity">
                          <MinusIcon size={14} />
                        </button>
                        <span className="px-2 py-1 border-l border-r border-gray-300 text-center w-10">
                          {item.quantity}
                        </span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-1 text-gray-600 hover:text-green-600 transition duration-300" aria-label="Increase quantity">
                          <PlusIcon size={14} />
                        </button>
                      </div>
                    </div>
                    {/* Total */}
                    <div className="md:col-span-2 text-right">
                      <span className="md:hidden text-gray-600 mr-2">
                        Total:
                      </span>
                      <span className="font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>)}
                {/* Continue Shopping */}
                <div className="p-4">
                  <Link to="/products" className="flex items-center text-green-600 hover:text-green-700 transition duration-300">
                    <ChevronRightIcon size={16} className="transform rotate-180 mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
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
                {deliveryFee > 0 && <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded">
                    Add ${(50 - cartTotal).toFixed(2)} more to qualify for free
                    delivery!
                  </div>}
                <Link to="/checkout" className="block w-full bg-green-600 text-white text-center py-3 rounded-full font-medium hover:bg-green-700 transition duration-300 mt-6">
                  Proceed to Checkout
                </Link>
                <div className="mt-4 text-sm text-center text-gray-500">
                  We accept credit cards, PayPal, and cash on delivery
                </div>
              </div>
            </div>
          </div> : <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCartIcon size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products" className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-full font-medium transition duration-300">
              Start Shopping
            </Link>
          </div>}
      </div>
    </div>;
};
export default CartPage;
import React, { useState } from 'react';
import { UserIcon, ShoppingBagIcon, MapPinIcon, CreditCardIcon, LogOutIcon, BellIcon } from 'lucide-react';
const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  };
  // Mock order data
  const orders = [{
    id: 'ORD-12345',
    date: 'May 15, 2023',
    total: 78.5,
    status: 'Delivered',
    items: 5
  }, {
    id: 'ORD-12346',
    date: 'April 30, 2023',
    total: 42.99,
    status: 'Delivered',
    items: 3
  }, {
    id: 'ORD-12347',
    date: 'April 15, 2023',
    total: 65.25,
    status: 'Delivered',
    items: 4
  }];
  // Mock address data
  const addresses = [{
    id: 1,
    name: 'Home',
    address: '123 Main Street',
    city: 'Anytown',
    state: 'ST',
    zipCode: '12345',
    isDefault: true
  }, {
    id: 2,
    name: 'Office',
    address: '456 Business Ave',
    city: 'Workville',
    state: 'ST',
    zipCode: '67890',
    isDefault: false
  }];
  // Mock payment methods
  const paymentMethods = [{
    id: 1,
    type: 'Visa',
    last4: '4242',
    expiry: '05/25',
    isDefault: true
  }, {
    id: 2,
    type: 'Mastercard',
    last4: '8888',
    expiry: '12/24',
    isDefault: false
  }];
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Account</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* User Info */}
              <div className="flex items-center mb-6">
                <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h2 className="font-medium text-lg">{user.name}</h2>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>
              {/* Navigation */}
              <nav className="space-y-1">
                <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center p-3 rounded-md transition duration-300 ${activeTab === 'profile' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <UserIcon size={18} className="mr-3" />
                  <span>Profile</span>
                </button>
                <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center p-3 rounded-md transition duration-300 ${activeTab === 'orders' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <ShoppingBagIcon size={18} className="mr-3" />
                  <span>Orders</span>
                </button>
                <button onClick={() => setActiveTab('addresses')} className={`w-full flex items-center p-3 rounded-md transition duration-300 ${activeTab === 'addresses' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <MapPinIcon size={18} className="mr-3" />
                  <span>Addresses</span>
                </button>
                <button onClick={() => setActiveTab('payment')} className={`w-full flex items-center p-3 rounded-md transition duration-300 ${activeTab === 'payment' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <CreditCardIcon size={18} className="mr-3" />
                  <span>Payment Methods</span>
                </button>
                <button onClick={() => setActiveTab('notifications')} className={`w-full flex items-center p-3 rounded-md transition duration-300 ${activeTab === 'notifications' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <BellIcon size={18} className="mr-3" />
                  <span>Notifications</span>
                </button>
                <button className="w-full flex items-center p-3 rounded-md text-gray-600 hover:bg-gray-50 transition duration-300">
                  <LogOutIcon size={18} className="mr-3" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && <div>
                  <h2 className="text-xl font-medium text-gray-800 mb-6">
                    Profile Information
                  </h2>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="firstName">
                          First Name
                        </label>
                        <input type="text" id="firstName" defaultValue="John" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="lastName">
                          Last Name
                        </label>
                        <input type="text" id="lastName" defaultValue="Doe" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">
                          Email
                        </label>
                        <input type="email" id="email" defaultValue={user.email} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1" htmlFor="phone">
                          Phone Number
                        </label>
                        <input type="tel" id="phone" defaultValue={user.phone} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-3">
                        Password
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-1" htmlFor="currentPassword">
                            Current Password
                          </label>
                          <input type="password" id="currentPassword" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-1" htmlFor="newPassword">
                            New Password
                          </label>
                          <input type="password" id="newPassword" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-full font-medium transition duration-300">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>}
              {/* Orders Tab */}
              {activeTab === 'orders' && <div>
                  <h2 className="text-xl font-medium text-gray-800 mb-6">
                    Order History
                  </h2>
                  {orders.length > 0 ? <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-3 px-4 text-left text-gray-600 font-medium">
                              Order ID
                            </th>
                            <th className="py-3 px-4 text-left text-gray-600 font-medium">
                              Date
                            </th>
                            <th className="py-3 px-4 text-left text-gray-600 font-medium">
                              Items
                            </th>
                            <th className="py-3 px-4 text-left text-gray-600 font-medium">
                              Total
                            </th>
                            <th className="py-3 px-4 text-left text-gray-600 font-medium">
                              Status
                            </th>
                            <th className="py-3 px-4 text-left text-gray-600 font-medium"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {orders.map(order => <tr key={order.id} className="hover:bg-gray-50 transition duration-300">
                              <td className="py-4 px-4 text-gray-800">
                                {order.id}
                              </td>
                              <td className="py-4 px-4 text-gray-600">
                                {order.date}
                              </td>
                              <td className="py-4 px-4 text-gray-600">
                                {order.items} items
                              </td>
                              <td className="py-4 px-4 text-gray-800">
                                ${order.total.toFixed(2)}
                              </td>
                              <td className="py-4 px-4">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <button className="text-green-600 hover:text-green-700 transition duration-300">
                                  View Details
                                </button>
                              </td>
                            </tr>)}
                        </tbody>
                      </table>
                    </div> : <div className="text-center py-8">
                      <ShoppingBagIcon size={48} className="mx-auto text-gray-300 mb-3" />
                      <h3 className="text-lg font-medium text-gray-800 mb-1">
                        No orders yet
                      </h3>
                      <p className="text-gray-600">
                        When you place orders, they will appear here.
                      </p>
                    </div>}
                </div>}
              {/* Addresses Tab */}
              {activeTab === 'addresses' && <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-medium text-gray-800">
                      Saved Addresses
                    </h2>
                    <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-full text-sm font-medium transition duration-300">
                      Add New Address
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addresses.map(address => <div key={address.id} className="border border-gray-200 rounded-lg p-4 relative hover:border-green-500 transition duration-300">
                        {address.isDefault && <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                            Default
                          </span>}
                        <h3 className="font-medium text-gray-800 mb-1">
                          {address.name}
                        </h3>
                        <p className="text-gray-600">
                          {address.address}
                          <br />
                          {address.city}, {address.state} {address.zipCode}
                        </p>
                        <div className="mt-4 flex space-x-3">
                          <button className="text-sm text-green-600 hover:text-green-700 transition duration-300">
                            Edit
                          </button>
                          <button className="text-sm text-red-500 hover:text-red-600 transition duration-300">
                            Delete
                          </button>
                          {!address.isDefault && <button className="text-sm text-gray-600 hover:text-gray-800 transition duration-300">
                              Set as Default
                            </button>}
                        </div>
                      </div>)}
                  </div>
                </div>}
              {/* Payment Methods Tab */}
              {activeTab === 'payment' && <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-medium text-gray-800">
                      Payment Methods
                    </h2>
                    <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-full text-sm font-medium transition duration-300">
                      Add New Card
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paymentMethods.map(method => <div key={method.id} className="border border-gray-200 rounded-lg p-4 relative hover:border-green-500 transition duration-300">
                        {method.isDefault && <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                            Default
                          </span>}
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-6 bg-blue-600 rounded mr-3"></div>
                          <h3 className="font-medium text-gray-800">
                            {method.type} •••• {method.last4}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Expires {method.expiry}
                        </p>
                        <div className="mt-4 flex space-x-3">
                          <button className="text-sm text-red-500 hover:text-red-600 transition duration-300">
                            Remove
                          </button>
                          {!method.isDefault && <button className="text-sm text-gray-600 hover:text-gray-800 transition duration-300">
                              Set as Default
                            </button>}
                        </div>
                      </div>)}
                  </div>
                </div>}
              {/* Notifications Tab */}
              {activeTab === 'notifications' && <div>
                  <h2 className="text-xl font-medium text-gray-800 mb-6">
                    Notification Preferences
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          Order Updates
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Receive updates about your order status
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          Promotions & Deals
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Get notified about special offers and discounts
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          Product Recommendations
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Receive personalized product suggestions
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          Email Newsletter
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Weekly updates with new products and recipes
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-end mt-8">
                    <button type="submit" className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-full font-medium transition duration-300">
                      Save Preferences
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AccountPage;
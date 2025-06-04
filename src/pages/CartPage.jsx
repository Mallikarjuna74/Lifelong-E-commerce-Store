import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data for cart items - in a real app, this would come from global state/API
const initialMockCartItems = [
  {
    id: 'prod123',
    title: 'Lifelong Fitness Pro Spin Bike',
    price: 12999.00,
    quantity: 1,
    image: 'https://via.placeholder.com/150/f0f0f0/333?text=Spin+Bike', // Replace with actual image path
    description: 'High-quality spin bike for home workouts.'
  },
  {
    id: 'prod456',
    title: 'Lifelong Massager Cushion',
    price: 2499.00,
    quantity: 2,
    image: 'https://via.placeholder.com/150/e0e0e0/333?text=Massager', // Replace with actual image path
    description: 'Relaxing massage cushion for back and neck.'
  },
];

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Simulate fetching/loading cart items
  useEffect(() => {
    // To see the cart with items, use:
    setCartItems(initialMockCartItems);

    // To see the empty cart, use:
    // setCartItems([]);
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(0, parseInt(newQuantity, 10)) } : item
      ).filter(item => item.quantity > 0) // Optionally remove if quantity becomes 0
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateGrandTotal = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-200px)] flex flex-col justify-center items-center"> {/* Adjust min-h as needed */}
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Your Shopping Cart</h1>
        {/* You can use an SVG or an image for the empty cart icon */}
        <svg className="w-32 h-32 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        <p className="text-xl text-gray-600 mb-8">Your cart is currently empty.</p>
        <Link
          to="/MainContent" // Link to homepage or products page
          className="bg-[#b31f29] text-white px-8 py-3 rounded-md hover:bg-[#9c1b24] transition-colors duration-150 text-lg font-medium"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Your Shopping Cart</h1>
      <div className="bg-white rounded-lg">
        {/* Cart Items Header (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-5 border-b border-gray-200 text-sm font-semibold text-gray-600 uppercase">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-1 text-right">Total</div>
          <div className="col-span-1 text-center">Action</div>
        </div>

        {/* Cart Items List */}
        {cartItems.map(item => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-5 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
            {/* Product Details */}
            <div className="col-span-1 md:col-span-6 flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md border border-gray-200" />
              <div>
                <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                <p className="text-xs text-gray-500 truncate w-60 md:w-auto">{item.description}</p>
              </div>
            </div>
                
            {/* Price */}
            <div className="col-span-1 md:col-span-2 text-left md:text-center text-gray-700"><span className="md:hidden font-semibold">Price: </span>₹{item.price.toFixed(2)}</div>
            {/* Quantity */}
            <div className="col-span-1 md:col-span-2 flex items-center justify-start md:justify-center space-x-2">
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50" disabled={item.quantity <= 0}>-</button>
              <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e.target.value)} className="w-12 text-center border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"/>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">+</button>
            </div>
            {/* Item Total */}
            <div className="col-span-1 md:text-right font-semibold text-gray-800"><span className="md:hidden font-semibold">Subtotal: </span>₹{calculateItemTotal(item).toFixed(2)}</div>
            {/* Remove Button */}
            <div className="col-span-1 text-left md:text-center">
              <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700 transition-colors duration-150 font-medium">Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary & Checkout */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium mb-6 md:mb-0">
          Continue Shopping
        </Link>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-800 mb-4">
            Grand Total: <span className="text-[#b31f29]">₹{calculateGrandTotal().toFixed(2)}</span>
          </div>
          <button className="w-full md:w-auto bg-[#b31f29] text-white px-10 py-3 rounded-md hover:bg-[#9c1b24] transition-colors duration-150 text-lg font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );  
}
export default CartPage;
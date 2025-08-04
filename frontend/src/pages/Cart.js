import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { total, itemCount } = useCart();

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {itemCount === 0 ? (
        <div className="card p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">Add some products to get started!</p>
        </div>
      ) : (
        <div className="card p-6">
          <p className="text-center text-gray-600 mb-4">
            Cart functionality will be implemented here.
          </p>
          <p className="text-center">
            Items in cart: {itemCount} | Total: ${total}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart; 
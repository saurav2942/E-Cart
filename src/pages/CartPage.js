import React from 'react'
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const items = useSelector(store=>store.cart);  
  return items.length ? (
    <Cart />
  ) : (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-gray-700 font-semibold text-xl mb-2">
        Your cart is empty!
      </h1>
      <Link to="/">
        <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
          SHOP NOW
        </button>
      </Link>
    </div>
  );
}

export default CartPage
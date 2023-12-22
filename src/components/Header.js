import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png"
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector(store=>store.cart);
  return (
    <div className="bg-slate-900">
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto bg-slate-900">
        <Link to="/">
          <div className="ml-5">
            <img
              src={logo}
              className="h-10"
              alt=""
            />
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-slate-100 -tracking-tighterr font-medium">
          <Link to="/">
            <li className="text-lg cursor-pointer hover:text-green-400 transition duration-300 ease-in">
              Home
            </li>
          </Link>
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl cursor-pointer text-white hover:text-green-400 transition duration-300 ease-in" />
              {cart.length>0 && <div className="absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                {cart.length}
              </div>}
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header
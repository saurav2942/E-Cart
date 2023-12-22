import React from 'react'
import {useState, useEffect} from "react"
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(store=>store.cart);
    const [amount, setAmount]=useState(0);
    
    useEffect(()=>{
        setAmount(cart.reduce((acc, item)=>acc+item.price, 0));
    }, [cart]);

    
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
      <div className="w-[100%] md:w-[50%] flex flex-col p-2">
        {cart.map((e) => (
          <CartItem key = {e.id} data={e}/>
        ))}
      </div>
      <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
        <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
          <div className="flex flex-col gap-5 ">
            <div className="font-semibold text-xl text-green-800 ">
              YOUR CART
            </div>
            <div className="font-semibold text-5xl text-green-700  -mt-5">
              SUMMARY
            </div>
            <p className="text-xl">
              <span className="text-gray-700 font-semibold text-xl">
                Total Items
              </span>
              : {cart.length}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold">
              {" "}
              <span className="text-gray-700 font-semibold">
                Total Amount
              </span>{" "}
              : ${amount}
            </p>
            <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart
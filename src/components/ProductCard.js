import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { add, remove } from '../utils/CartSlice';
import { useNavigate } from 'react-router';
import {createSearchParams} from "react-router-dom"

const ProductCard = ({data}) => {
  const cart = useSelector(store=>store.cart);
  const [isAdded, setIsAdded] = useState(cart.filter((e) => e.id === data.id).length);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  function clickHandler(){
    if(isAdded){
        setIsAdded(false);
        dispatch(remove(data.id));
    }
    else{
        setIsAdded(true);
        dispatch(add(data));
    }
  }

  function handleNavigation(e){
    if(e.target.name) return;
    navigate({
      pathname: "/product",
      search: createSearchParams({
        id: data.id,
      }).toString(),
    });
  }

  return (
    <div
      className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl"
      onClick={(e) => handleNavigation(e)}
    >
      <div>
        <h1 className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">
          {data.title}
        </h1>
      </div>
      <div>
        <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left">
          {data.description.substr(0, data.description.length / 2) + "..."}
        </h1>
      </div>
      <div className="h-[180px]">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex items-center justify-between w-full mt-5">
        <p className="text-green-600 font-semibold">${data.price}</p>
        <button
          name="cart-btn"
          className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
          onClick={() => clickHandler()}
        >
          {!isAdded ? "Add To Cart" : "Remove From Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard
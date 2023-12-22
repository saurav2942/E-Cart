import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Rating from "@mui/material/Rating";
import { FaTag } from "react-icons/fa";
import Loader from '../components/Loader';
import InputWithIcon from '../mui/InputWithIcon';
import { FaShareFromSquare } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../utils/CartSlice';
import ReletedProducts from '../components/ReletedProducts';

const ProductPage = () => {
  const products = useSelector(store=>store.products);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const data = products.filter(e=>e.id===Number(id))?.[0];
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cart);
  const [isAdded, setIsAdded] = useState(
    cart.filter((e) => e.id === data.id).length
  );
  const dispatch = useDispatch();

  function clickHandler() {
    if (isAdded) {
      setIsAdded(false);
      dispatch(remove(data.id));
    } else {
      setIsAdded(true);
      dispatch(add(data));
    }
  }
  
  
  
  return !data ? (
    <Loader />
  ) : (
    <div className='flex flex-col'>
      <div className="max-w-max flex flex-col md:flex-row h-[75vh] gap-4 px-5">
        <div className="w-[100%] md:w-[40%] flex flex-col p-2 gap-4 mt-5">
          <div className="border-2 border-green-500 py-3 px-5 h-[100%] rounded-lg">
            <img
              src={data.image}
              alt={data.title}
              className="max-h-[350px] w-full object-contain"
            />
          </div>
          <div className="flex justify-between text-2xl">
            <button
              className="w-[45%] bg-green-600 rounded-lg text-white font-bold py-3 px-5 hover:bg-green-800 transition duration-300 ease-in"
              onClick={() => clickHandler()}
            >
              {!isAdded ? "Add To Cart" : "Remove From Cart"}
            </button>
            <button
              className="w-[45%] bg-green-600 rounded-lg text-white font-bold py-3 px-5  hover:bg-green-800"
              onClick={() => navigate("../cart")}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[60%] mt-5 flex flex-col gap-1">
          <div className="flex justify-between text-center">
            <h1 className="text-xl text-slate-700 font-semibold">
              {data.title}
            </h1>
            <FaShareFromSquare className="text-xl text-blue-600 mr-5 cursor-pointer" />
          </div>
          <h1 className="text-base text-slate-700 font-normal italic opacity-60">
            {data.description.substr(0, data.description.length) + "..."}
          </h1>
          <div className="flex items-center justify-start gap-2">
            <Rating
              name="half-rating-read"
              defaultValue={data.rating.rate}
              precision={0.1}
              readOnly
            />
            <p className="text-blue-500 hover:text-blue-800 cursor-pointer">
              {data.rating.count}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${data.price}</p>
          </div>
          <h2 className="font-bold tracking-wide">Available offers</h2>
          <div className="px-2 space-y-1">
            <p className="inline-block">
              <span>
                <FaTag className="text-green-600 inline mr-1" />
              </span>
              <span className="font-bold mr-1">Bank Offer</span>10% off on HDFC
              Bank Credit Card EMI Transactions, up to $1,500 on orders of
              $7,500 and above
              <span className="inline font-medium text-blue-600 ml-1 cursor-pointer">
                T&C
              </span>
            </p>
            <p className="inline-block">
              <span>
                <FaTag className="text-green-600 inline mr-1" />
              </span>
              <span className="font-bold mr-1">Bank Offer</span>10% off on
              Federal Bank Credit Card and Credit EMI Txns, up to $2,000 on
              orders of $5,000 and above
              <span className="inline font-medium text-blue-600 ml-1 cursor-pointer">
                T&C
              </span>
            </p>
            <p className="inline-block">
              <span>
                <FaTag className="text-green-600 inline mr-1" />
              </span>
              <span className="font-bold mr-1">Bank Offer</span>10% off on IDFC
              FIRST Bank Credit Card EMI Transactions, up to $2,000 on orders of
              $5,000 and above
              <span className="inline font-medium text-blue-600 ml-1 cursor-pointer">
                T&C
              </span>
            </p>
            <p className="inline-block">
              <span>
                <FaTag className="text-green-600 inline mr-1" />
              </span>
              <span className="font-bold mr-1">Bank Offer</span>Get extra 10%
              off (price inclusive of cashback/coupon)
              <span className="inline font-medium text-blue-600 ml-1 cursor-pointer">
                T&C
              </span>
            </p>
            <p className="inline-block">
              <span>
                <FaTag className="text-green-600 inline mr-1" />
              </span>
              <span className="font-bold mr-1">Bank Offer</span>Flat $1,000 off
              on OneCard Credit Card and Credit EMI Transactions on orders of
              $10,000 and above
              <span className="inline font-medium text-blue-600 ml-1 cursor-pointer">
                T&C
              </span>
            </p>
          </div>
          <p className="inline-block font-medium text-blue-600 cursor-pointer">
            view 8 more offers
          </p>
          <div className="max-w-[350px] flex justify-start items-center gap-4">
            <div>
              <p className="font-bold text-lg text-gray-500">Delivery</p>
            </div>
            <InputWithIcon />
          </div>
        </div>
      </div>
      <div className='text-center py-2 text-2xl font-medium underline'>
        <h2>Releted Products</h2>
      </div>
      <ReletedProducts
        products={products.filter((e) => e.category === data.category)}
      />
    </div>
  );
}

export default ProductPage
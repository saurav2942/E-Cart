import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch} from 'react-redux';
import { remove } from '../utils/CartSlice';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';

const CartItem = ({data}) => {
  const dispatch= useDispatch();
  const navigate = useNavigate()

  function handleNavigation(e) {
    navigate({
      pathname: "/product",
      search: createSearchParams({
        id: data.id,
      }).toString(),
    });
  }
  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div
          className="w-[30%] cursor-pointer"
          onClick={(e) => handleNavigation(e)}
        >
          <img src={data.image} className="object-cover " alt={data.title} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1
            className="text-xl text-slate-700 font-semibold cursor-pointer"
            onClick={(e) => handleNavigation(e)}
          >
            {data.title}
          </h1>
          <h1 className="text-base text-slate-700 font-medium">
            {data.description.substr(0, data.description.length / 2) + "..."}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${data.price}</p>
            <div
              className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={() => dispatch(remove(data.id))}
            >
              <MdDelete className="text-2xl text-red-800 group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem
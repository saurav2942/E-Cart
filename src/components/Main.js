import React from 'react'
import ProductCard from './ProductCard';

const Main = ({products}) => {
  if(products.length===0){
    return (    
       <div className='h-[80vh] flex flex-col justify-center items-center'>
         <h1 className="font-bold text-2xl">Something Went Wrong Try Again....</h1>
       </div>
    )
  }
  return (
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
      {products.map((e) => (
        <ProductCard key = {e.id} data = {e}/>
      ))}
    </div>
  );
}

export default Main
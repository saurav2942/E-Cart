import React from 'react'
import ProductCard from './ProductCard';

const ReletedProducts = ({products}) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
      {products.map((e) => (
        <ProductCard key={e.id} data={e} />
      ))}
    </div>
  );
}

export default ReletedProducts

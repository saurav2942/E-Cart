import React from 'react'
import Main from '../components/Main'
import Loader from '../components/Loader';
import { useOutletContext } from 'react-router';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const loading=useOutletContext();
  const products = useSelector(store=>store.products);

  return (loading?<Loader/>:<Main products={products}/>)
}

export default MainPage;
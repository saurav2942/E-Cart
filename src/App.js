import React, {useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'
import { All_PRODUCT_API as url } from "./config";
import { useDispatch } from 'react-redux';
import { add } from './utils/ProductsSlice';

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch(add(data));
        setLoading(false);
      } catch {
        console.log("API Call Failed....");
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
      <Header />
      <Outlet context={loading} />
    </>
  );
}

export default App
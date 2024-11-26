import React, { useContext, useState, useEffect } from 'react'

import Title from './Title';
import ProductItem from './ProductItem';
import { ShopContext } from '../context /ShopContext';
const TopSellers = () => {
    const {products}= useContext(ShopContext);
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        setTopProducts(products.slice(0, 10));
    }, []);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-xl'>
          <Title text={"PREMIUM"} subTitle={"PRODUCTS"} />
        </div>
   
   <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
   {
     topProducts.map((item,index)=>(
        <ProductItem key={item?._id} id={item._id } name={item.name} price={item.price} image={item.image} category={item.category} />
     ))
   }
   </div>
        

    </div>
  )
}

export default TopSellers
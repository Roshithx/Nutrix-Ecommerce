import React, { useContext, useEffect, useState } from 'react'

import Title from '../Components/Title'
import ProductItem from './ProductItem'
import { ShopContext } from '../context /ShopContext'


const RelatedProducts = ({category}) => {
    const {products}=useContext(ShopContext)
    const [relatedproduct,setRelatedproduct]=useState([])
 
    useEffect(()=>{
       if(products.length>0){
          let ProductCopy = [...products]
          ProductCopy = ProductCopy.filter((item)=>category===item.category)
          setRelatedproduct(ProductCopy.slice(0,5))
          
          
       }
    },[products])

  return (
    <div className='my-24 '>
     <div className='text-center text-3xl py-2'>
        <Title text={'RELATED'} subTitle={'PRODUCTS'}/>
     </div>
     <div className='grid grid-cols-2 sm:grid-cols-3-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
    relatedproduct.map((item)=>(
        <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} category={item.category} />
    ))
}
     </div>
    </div>
  )
}

export default RelatedProducts
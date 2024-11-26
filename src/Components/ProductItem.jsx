import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context /ShopContext';

const ProductItem = ({id,image,name,price,category}) => {
    const {currency} =  useContext(ShopContext);
    const trimmedName = name.length > 50 ? name.slice(0, 50) + '...' : name;
    
  return (
   <div>
     <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer '>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pb-1 pt-3 text-sm'>{trimmedName}</p>
        <p className='pb-1 pt-3 text-sm' >{category}</p>
        <p className='text-sm font-bold'>{currency} {price}</p>
    </Link>
   </div>
  
  )
}

export default ProductItem
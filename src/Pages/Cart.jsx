import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context /ShopContext';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';

const Cart = () => {
  const { currency, cart, updateQuantity, deleteFromCart } = useContext(ShopContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, Math.max(newQuantity, 0)); // Ensure quantity is non-negative
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text="YOUR" subTitle="CART" />
      </div>
      <div>
        {Object.keys(cart).length > 0 ? (
          Object.values(cart).map((item) => (
            <div
              key={item._id}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={item.image?.[0] || assets.placeholder_image}
                  alt={item.name || "Product Image"}
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">{item.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency} {item.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item._id, parseInt(e.target.value, 10))
                }
              />
              <img
                onClick={() => deleteFromCart(item._id)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt="Remove Item"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty!</p>
        )}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
        </div>
      </div>
    </div>
  );
};

export default Cart;

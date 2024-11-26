import React from 'react';
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='w-full border-t mt-40 my-10 '>
      <div className='container mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8 '>
        <div className='col-span-1'>
          <img width={100} src={Logo} alt="Nutrix Logo" className='mb-4' />
          <p className='text-sm leading-relaxed'>
            Nutrix offers premium protein powders and health products to support an active lifestyle. All products are manufactured at FSSAI-approved facilities. Not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <div className='flex space-x-4 mt-4'>
            <a href="#" aria-label="Facebook" className='text-gray-700 '><i className="fa-brands fa-facebook text-xl"></i></a>
            <a href="#" aria-label="Instagram" className='text-gray-700 '><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" aria-label="Twitter" className='text-gray-700 '><i className="fa-brands fa-twitter text-xl"></i></a>
            <a href="#" aria-label="YouTube" className='text-gray-700 '><i className="fa-brands fa-youtube text-xl"></i></a>
          </div>
        </div>
        <div>
          <h2 className='text-lg font-semibold mb-3'>Useful Links</h2>
          <ul className='space-y-2 text-sm'>
            <li><a href="#" className='hover:underline'>About Nutrix</a></li>
            <li><a href="#" className='hover:underline'>How to Shop</a></li>
            <li><a href="#" className='hover:underline'>FAQ</a></li>
            <li><a href="#" className='hover:underline'>Contact Us</a></li>
            <li><a href="#" className='hover:underline'>Log In</a></li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-semibold mb-3'>Customer Service</h2>
          <ul className='space-y-2 text-sm'>
            <li><a href="#" className='hover:underline'>Payment Methods</a></li>
            <li><a href="#" className='hover:underline'>Money-back Guarantee</a></li>
            <li><a href="#" className='hover:underline'>Returns</a></li>
            <li><a href="#" className='hover:underline'>Shipping</a></li>
            <li><a href="#" className='hover:underline'>Terms & Conditions</a></li>
            <li><a href="#" className='hover:underline'>Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-semibold mb-3'>My Account</h2>
          <ul className='space-y-2 text-sm'>
            <li><a href="#" className='hover:underline'>Sign In</a></li>
            <li><a href="#" className='hover:underline'>View Cart</a></li>
            <li><a href="#" className='hover:underline'>My Wishlist</a></li>
            <li><a href="#" className='hover:underline'>Track My Order</a></li>
            <li><a href="#" className='hover:underline'>Help</a></li>
          </ul>
        </div>
      </div>
      <div className='w-full  text-center py-4 text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} Nutrix. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

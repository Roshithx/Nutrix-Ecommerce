import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Auth from '../Pages/Auth'; // Import the Auth component
import '../App.css';
import { ShopContext } from '../context /ShopContext';


const Navbar = () => {
  const [menu, setMenu] = useState('HOME');
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  
        
         const {setShowSearch , getCartCount}=useContext(ShopContext)

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      setUsername(JSON.parse(sessionStorage.getItem('user')).username);
    } else {
      setUsername('');
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true); // Open the modal when the profile icon is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="flex justify-between items-center pt-[30px]">
      <Link to="../">
        <img width={120} src={Logo} alt="" />
      </Link>
      <ul className="hidden sm:flex list-none gap-[30px] text-gray-600">
        <Link to="../">
          <li
            onClick={() => {
              setMenu('HOME');
            }}
            className={menu === 'HOME' ? 'active' : ''}
          >
            HOME
          </li>
        </Link>
        <Link to="../shop">
          <li
            onClick={() => {
              setMenu('SHOP');
            }}
            className={menu === 'SHOP' ? 'active' : ''}
          >
            SHOP
          </li>
        </Link>
      </ul>



      <div className="navbar-end flex items-center gap-[40px] text-xl text-gray-600">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
            onClick={openModal} // Open modal when profile icon is clicked
          />
        </div>

        <Link className="relative" to="/cart">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
      
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
        
      </div>

      {/* Modal for Authentication */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white pb-20  p-3 rounded-lg relative w-[90%] max-w-[400px]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              className="absolute top-2 right-2 p-3  text-xl font-bold"
              onClick={closeModal}
            >
              <i className="fa-solid text-xl fa-x"></i>
            </button>
            {/* Render the Auth component inside the modal */}
            <Auth closeModal={closeModal} /> {/* Authentication form */}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-3 p-3 cursor-pointer hover">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/shop">
            SHOP
          </NavLink>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;

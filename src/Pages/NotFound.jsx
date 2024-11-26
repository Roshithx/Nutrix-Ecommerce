import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundGif from '../assets/ga.gif'; 

const NotFound = () => {
  return (
    <>
      <div style={{ height: '80vh' }} className='flex flex-col justify-center items-center'>
        <img src={NotFoundGif} alt="Page Not Found" className='w-96 h-auto mb-2' />
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Page Not Found</h1>
        <p className='text-gray-600 mb-4'>Sorry, the page you are looking for doesn't exist.</p>
        <Link to={'/'} className='bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition duration-300'>
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;

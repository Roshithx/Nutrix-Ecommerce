import React from 'react'

const SubscribeBox = () => {

    const onSubmitHandler=(e)=>{
         e.preventDefault()
    }
  return (
    <div className='text-center mt-40'>
       <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 40% off</p>
       <p className='text-gray-400 mt-3 '></p>
       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ' >
        <input type="text" className='w-full sm:flex-1 outline-none' required  placeholder='Enter your email' />
        <button type='submit' className='bg-black text-white text-xs  px-10 py-4' >SUBSCRIBE</button>
       </form>
    </div>
  )
}

export default SubscribeBox
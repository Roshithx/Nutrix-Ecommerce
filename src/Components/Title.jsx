import React from 'react'

const Title = ({text,subTitle}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500 '>{text}</p> <span className='font-medium text-gray-700'>{subTitle}</span>
        <p className='w-8 sm:w-12 h-[2px] bg-gray-500'></p>
    </div>
  )
}

export default Title
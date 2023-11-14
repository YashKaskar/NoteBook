import React from 'react'

import Vector from '../../assets/Vector.png'

const UpperBar = () => {
  const colors = ["#F3B664", '#ED5AB3', '#427D9D', '#F4BF96', '#DA0C81']

  return (
      <div className='p-10 flex md:justify-center justify-normal'> 
      <img src={Vector} alt="AddButton" className='w-[50px] cursor-pointer mr-6' />
      <ul className='flex cursor-pointer gap-4 mt-4'>  
      {
          colors.map((item, index) => ( 
            <li
              key={index}
              className='rounded-full h-[33px] w-[33px]'
              style={{backgroundColor: item}}
            />
        ))}
      </ul>
      </div>
  )
}

export default UpperBar

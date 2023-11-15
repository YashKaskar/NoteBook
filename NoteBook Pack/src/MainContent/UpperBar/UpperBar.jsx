import React, { useState } from 'react'
import '../UpperBar/UpperBar.css'

import Vector from '../../assets/Vector.png'

const UpperBar = () => {
  const colors = ["#F3B664", '#ED5AB3', '#427D9D', '#F4BF96', '#DA0C81']
  const [open, setOpen] = useState(false);

  return (
      <div className='p-10 flex justify-center '> 
      <img src={Vector} alt="AddButton" className='w-[50px] h-[50px] cursor-pointer mr-6' onClick={() => setOpen(!open)} />
      <ul className={`toggle ${open ? "toggle_active" : ""}`}>  
      {
          colors.map((item, index) => ( 
            <li
              key={index}
              className='rounded-full h-[33px] w-[33px] gap-4 '
              style={{backgroundColor: item}}
            />
        ))}
        
      </ul>
      </div>
  )
}

export default UpperBar

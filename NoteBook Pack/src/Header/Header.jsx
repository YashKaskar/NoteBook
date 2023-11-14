import React from 'react'
import logo from '../assets/logo.svg'


const Header = () => {
  return (  
    <>
      <div className='bg-[#ffea92] flex justify-center sticky top-0'>  
      <img src={logo} alt="logo"  className='w-[25%] md:w-[13%] bg-[#ffea92]'/> 
     </div>
      
    </>
  )
}

export default Header

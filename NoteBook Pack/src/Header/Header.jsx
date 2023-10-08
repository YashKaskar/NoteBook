import React from 'react'
import logo from '../assets/logo.svg'
import './Header.css'

const Header = () => {
  return (  
    <>
      <div className='logo'>  
      <img src={logo} alt="logo"  className='img'/> 
     </div>
      
    </>
  )
}

export default Header

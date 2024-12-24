import React from 'react'
import './Logo.css'
const Logo = () => {
  return (
    <div id='my-logo'>
      <div id="logo-img-cont">
        <img id="logo-img" src="assets/logo/logo.webp" alt="" />
      </div>
      <div id="logo-text" className=' pt-3 ms-2'>
        Personal
      </div>
    </div>
  )
}

export default Logo

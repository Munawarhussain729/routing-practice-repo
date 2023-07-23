import React from 'react'
import "./Navbar.css"
import Logo from "./../../logo.svg"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div >
      <nav className='nav-bar'>
        <div className='logo-image'>
          <img alt='logo not found' src={Logo} className='image'/>
        </div>
        <div className='navigation'>
          <Link to={"/"} className='link'>Home</Link>
          <Link to={"/about"} className='link'>About</Link>
          <Link to={"contact"}className='link'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
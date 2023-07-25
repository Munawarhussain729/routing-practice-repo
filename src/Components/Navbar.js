
import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <nav classname='Navbar'>
    <div className='navigation' style={{display: 'flex', gap: '15px',backgroundColor:'lightblue',
color:'darkblue',border: '2px solid darkblue',
borderRadius: '10px',padding:'5px 5px 5px 5px'}}>
        
        <Link to={"/"} className='Link'>Home</Link>
        <Link to={"/about"} className='Link'>About</Link>
        <Link to={"/contact"} className='Link'>Contact</Link>
      
    </div>
    </nav>
  )
}

export default Navbar

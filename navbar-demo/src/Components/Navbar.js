import React from 'react';
import './Navbar.css';
 import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className='Nav'>
      <div >
     <ul>
        
          {/* 
       
          <Link to='/about'>About</Link>
        
          <Link to='/conatct'>Contact</Link> */}
          <Link to='/'>Home</Link>
        
      </ul>
      </div>
   </div>
  )
}

export default Navbar
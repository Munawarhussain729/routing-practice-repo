import React from 'react';
import './Navbar.css';
 import { Link } from "react-router-dom";

import logoo from './logoo.png'
export const Navbar = () => {
  return (
    <div className='Nav'>
      
      
     <ul>
     
     <div className='logo'> <img src={logoo} alt="Logo" /></div>
      
      
       <li>
       <Link to='/'>Home</Link>
       </li>
           <li>
           <Link to='/about'>About</Link>
           </li>
          <li>
          <Link to='/contact'>Contact</Link>
          </li>
        
         
          
        
      </ul>
      
   </div>
  )
}

export default Navbar